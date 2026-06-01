
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, ArrowRight, Eye, EyeOff, Phone, KeyRound, Loader2 } from 'lucide-react';
import { auth, db } from '../firebase';
import {
  signInWithCustomToken,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  browserLocalPersistence,
  setPersistence,
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  initialView?: 'login' | 'register';
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSuccess, initialView = 'login' }) => {
  // Set to true right after signInWithCustomToken succeeds so effects that
  // call setShowOtp(false) cannot fire and reset the form during the modal's
  // closing animation or if the modal briefly re-opens due to a late auth state.
  const loginSucceeded = useRef(false);

  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [loginMethod, setLoginMethod] = useState<'phone' | 'email'>('phone');

  // Phone Login State
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Email/Password State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  // Countdown timer for OTP resend
  useEffect(() => {
    if (timer <= 0) return;
    const id = setInterval(() => setTimer(t => t - 1), 1000);
    return () => clearInterval(id);
  }, [timer]);

  // Reset state when modal opens — NOT on close, to avoid flashing during exit animation
  useEffect(() => {
    if (isOpen) setOtp('');
    if (loginSucceeded.current) return;
    if (isOpen) {
      setPhoneNumber('');
      setOtp('');
      setShowOtp(false);
      setTimer(0);
      setLoginMethod('phone');
      setIsLoading(false);
      setRegistrationSuccess(false);
      setError(null);
      setEmail('');
      setPassword('');
      setFullName('');
      setIsLogin(initialView === 'login');
    }
  }, [isOpen, initialView]);

  useEffect(() => {
    if (loginSucceeded.current) return;
    setShowOtp(false);
    setOtp('');
    setRegistrationSuccess(false);
    setError(null);
  }, [loginMethod, isLogin]);

  const handleSendOtp = async () => {
    if (phoneNumber.length !== 10) return;

    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: phoneNumber }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send OTP');
      setShowOtp(true);
      setTimer(60);
    } catch (err: any) {
      setError(err.message || 'Failed to send OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) return;

    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: phoneNumber, otp }),
      });
      const data = await res.json();
      if (!res.ok) {
        // MSG91 passed but Firebase Admin couldn't issue a token
        if (data.otpVerified) {
          throw new Error('OTP verified but login failed. Please use email login instead.');
        }
        throw new Error(data.error || 'Invalid OTP. Please try again.');
      }

      // Ensure session survives mobile browser restarts
      await setPersistence(auth, browserLocalPersistence);

      // Sign into Firebase with custom token issued by our API route
      const userCredential = await signInWithCustomToken(auth, data.token);
      const user = userCredential.user;

      // Update display name in Firebase Auth + Firestore if provided
      if (fullName) {
        await updateProfile(user, { displayName: fullName });
        await setDoc(doc(db, 'users', user.uid), { displayName: fullName }, { merge: true });
      }

      // Store user data in localStorage and signal AuthProvider immediately so
      // isLoggedIn updates before any auth-guarded component can re-open the modal.
      try {
        localStorage.setItem('auth_user', JSON.stringify({
          uid: user.uid,
          phone: data.phone || `+91${phoneNumber}`,
          name: fullName || data.name || user.displayName || 'Student',
        }));
        window.dispatchEvent(new CustomEvent('auth_user_set'));
      } catch (_) {}

      // Mark success and clear OTP immediately so it cannot be reused.
      loginSucceeded.current = true;
      setOtp('');
      if (onSuccess) onSuccess();
      onClose();
    } catch (err: any) {
      const msg = err.message?.startsWith('OTP verified') || err.message?.startsWith('Invalid OTP')
        ? err.message
        : 'Verification failed. Please try again.';
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const getEmailErrorMessage = (code: string): string => {
    switch (code) {
      case 'auth/invalid-email':        return 'Please enter a valid email address';
      case 'auth/wrong-password':       return 'Incorrect password. Please try again';
      case 'auth/user-not-found':       return 'No account found with this email';
      case 'auth/weak-password':        return 'Password must be at least 6 characters';
      case 'auth/email-already-in-use': return 'An account with this email already exists';
      default:                          return 'Something went wrong. Please try again';
    }
  };

  const handleEmailAction = async () => {
    if (!email || !password) return;

    setError(null);
    setIsLoading(true);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        if (onSuccess) onSuccess();
        onClose();
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await updateProfile(user, { displayName: fullName });

        await setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          email: user.email,
          displayName: fullName,
          phoneNumber: null,
          role: 'student',
          createdAt: serverTimestamp(),
        });

        setRegistrationSuccess(true);
        setTimeout(() => {
          setIsLogin(true);
          setRegistrationSuccess(false);
        }, 3000);
      }
    } catch (err: any) {
      setError(getEmailErrorMessage(err.code));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          >
             {/* Modal Container */}
             <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md bg-white dark:bg-[#0f1115] rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10 relative"
             >
                {/* Decorative Gradients */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gameTeal to-gameGold"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gameTeal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gameGold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors z-10"
                >
                  <X size={20} />
                </button>

                <div className="p-8 pt-10">
                   {/* Header */}
                   <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gameTeal to-teal-600 text-white shadow-lg shadow-gameTeal/30 mb-4">
                         <span className="font-extrabold text-xl">G</span>
                      </div>
                      <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                        {isLogin ? 'Student Login' : 'Create Account'}
                      </h2>
                      <p className="text-slate-500 dark:text-gray-400 text-sm mt-1">
                        {isLogin ? 'Access your dashboard & courses' : 'Start your learning journey with us'}
                      </p>
                   </div>

                   {/* Login Method Tabs */}
                   <div className="flex p-1 bg-slate-100 dark:bg-white/5 rounded-xl mb-6 border border-slate-200 dark:border-white/5">
                      <button
                        className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${loginMethod === 'phone' ? 'bg-white dark:bg-white/10 shadow-sm text-gameTeal dark:text-gameGold ring-1 ring-black/5 dark:ring-white/10' : 'text-slate-500 dark:text-gray-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
                        onClick={() => setLoginMethod('phone')}
                      >
                        <Phone size={16} /> Mobile
                      </button>
                      <button
                        className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${loginMethod === 'email' ? 'bg-white dark:bg-white/10 shadow-sm text-gameTeal dark:text-gameGold ring-1 ring-black/5 dark:ring-white/10' : 'text-slate-500 dark:text-gray-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
                        onClick={() => setLoginMethod('email')}
                      >
                        <Mail size={16} /> Email
                      </button>
                   </div>

                   {/* Error Message */}
                   {error && (
                     <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs font-bold text-center">
                       {error}
                     </div>
                    )}

                   {/* Form */}
                   <div className="relative">
                      <AnimatePresence mode="wait">
                        {registrationSuccess ? (
                          <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="py-8 text-center space-y-4"
                          >
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Registration Successful!</h3>
                            <p className="text-slate-500 dark:text-gray-400">
                              Your account has been created. Please log in with your credentials to continue.
                            </p>
                            <div className="pt-4">
                              <Loader2 size={24} className="animate-spin text-gameTeal mx-auto" />
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

                               {!isLogin && (
                                  <div className="space-y-1.5">
                                     <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider ml-1">Full Name</label>
                                     <div className="relative group">
                                        <input
                                          type="text"
                                          value={fullName}
                                          onChange={(e) => setFullName(e.target.value)}
                                          placeholder="John Doe"
                                          className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 pl-10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-gameTeal dark:focus:border-gameGold transition-colors"
                                        />
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-gameTeal dark:group-focus-within:text-gameGold transition-colors">
                                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                        </div>
                                     </div>
                                  </div>
                               )}

                               {loginMethod === 'phone' ? (
                                 /* PHONE LOGIN via MSG91 */
                                 <div className="space-y-4">
                                     <div className="space-y-1.5">
                                         <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider ml-1">Mobile Number</label>
                                         <div className="relative group">
                                             <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold border-r border-slate-300 dark:border-white/10 pr-2 mr-2 text-sm flex items-center gap-1 pointer-events-none">
                                                 <span>IN</span> +91
                                             </div>
                                             <input
                                                 type="tel"
                                                 value={phoneNumber}
                                                 onChange={(e) => {
                                                     const val = e.target.value.replace(/\D/g, '');
                                                     if (val.length <= 10) setPhoneNumber(val);
                                                 }}
                                                 onKeyDown={(e) => { if (e.key === 'Enter' && !showOtp) handleSendOtp(); }}
                                                 disabled={showOtp}
                                                 placeholder="Enter 10 digit number"
                                                 className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 pl-[4.5rem] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-gameTeal dark:focus:border-gameGold transition-colors font-medium tracking-wide disabled:opacity-60"
                                             />
                                             <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-gameTeal dark:group-focus-within:text-gameGold transition-colors pointer-events-none">
                                                 <Phone size={18} />
                                             </div>
                                         </div>
                                     </div>

                                     {showOtp && (
                                         <motion.div
                                             initial={{ opacity: 0, height: 0 }}
                                             animate={{ opacity: 1, height: 'auto' }}
                                             className="space-y-1.5 overflow-hidden"
                                         >
                                             <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider ml-1">One Time Password</label>
                                             <div className="relative group">
                                                 <input
                                                     type="text"
                                                     value={otp}
                                                     onChange={(e) => {
                                                         const val = e.target.value.replace(/\D/g, '');
                                                         if (val.length <= 6) setOtp(val);
                                                     }}
                                                     onKeyDown={(e) => { if (e.key === 'Enter') handleVerifyOtp(); }}
                                                     placeholder="XXXXXX"
                                                     maxLength={6}
                                                     className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 pl-10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-gameTeal dark:focus:border-gameGold transition-colors text-center text-lg font-bold tracking-[0.5em]"
                                                 />
                                                 <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-gameTeal dark:group-focus-within:text-gameGold transition-colors">
                                                     <KeyRound size={18} />
                                                 </div>
                                             </div>
                                             <div className="flex justify-between items-center text-xs mt-1 px-1">
                                                 <span className="text-slate-500 dark:text-gray-500">
                                                   Sent to +91 {phoneNumber}{' '}
                                                   <button onClick={() => { setShowOtp(false); setOtp(''); }} className="text-gameTeal dark:text-gameGold ml-1 hover:underline font-bold">(Change)</button>
                                                 </span>
                                                 {timer > 0 ? (
                                                     <span className="text-slate-400 font-medium">Resend in {timer}s</span>
                                                 ) : (
                                                     <button type="button" onClick={handleSendOtp} className="text-gameTeal dark:text-gameGold font-bold hover:underline">Resend OTP</button>
                                                 )}
                                             </div>
                                         </motion.div>
                                     )}

                                     <button
                                         type="button"
                                         onClick={showOtp ? handleVerifyOtp : handleSendOtp}
                                         disabled={phoneNumber.length !== 10 || isLoading || (showOtp && otp.length !== 6)}
                                         className="w-full bg-gameTeal text-white font-bold py-3.5 rounded-xl shadow-lg shadow-gameTeal/25 hover:bg-gameTealDark hover:shadow-gameTeal/40 transition-all flex items-center justify-center gap-2 group mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                                     >
                                         {isLoading ? (
                                           <Loader2 size={20} className="animate-spin" />
                                         ) : (
                                           <>
                                             {showOtp ? 'Verify & Login' : 'Get OTP'}
                                             <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                           </>
                                         )}
                                     </button>
                                 </div>
                               ) : (
                                 /* EMAIL LOGIN */
                                 <div className="space-y-4">
                                     <div className="space-y-1.5">
                                         <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider ml-1">Email Address</label>
                                         <div className="relative group">
                                         <input
                                         type="email"
                                         value={email}
                                         onChange={(e) => setEmail(e.target.value)}
                                         placeholder="student@gameacademy.in"
                                         className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 pl-10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-gameTeal dark:focus:border-gameGold transition-colors"
                                         />
                                             <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-gameTeal dark:group-focus-within:text-gameGold transition-colors">
                                             <Mail size={18} />
                                             </div>
                                         </div>
                                     </div>

                                     <div className="space-y-1.5">
                                         <div className="flex justify-between items-center ml-1">
                                             <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider">Password</label>
                                             {isLogin && <a href="#" className="text-xs text-gameTeal dark:text-gameGold font-bold hover:underline">Forgot?</a>}
                                         </div>
                                         <div className="relative group">
                                         <input
                                         type={showPassword ? "text" : "password"}
                                         value={password}
                                         onChange={(e) => setPassword(e.target.value)}
                                         placeholder="••••••••"
                                         className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 pl-10 pr-10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-gameTeal dark:focus:border-gameGold transition-colors"
                                         />
                                             <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-gameTeal dark:group-focus-within:text-gameGold transition-colors">
                                             <Lock size={18} />
                                             </div>
                                             <button
                                                 type="button"
                                                 onClick={() => setShowPassword(!showPassword)}
                                                 className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                                             >
                                             {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                             </button>
                                         </div>
                                     </div>

                                     <button
                                        type="button"
                                        onClick={handleEmailAction}
                                        disabled={isLoading}
                                        className="w-full bg-gameTeal text-white font-bold py-3.5 rounded-xl shadow-lg shadow-gameTeal/25 hover:bg-gameTealDark hover:shadow-gameTeal/40 transition-all flex items-center justify-center gap-2 group mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                                     >
                                         {isLoading ? (
                                           <Loader2 size={20} className="animate-spin" />
                                         ) : (
                                           <>
                                             {isLogin ? 'Sign In' : 'Create Account'}
                                             <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                           </>
                                         )}
                                     </button>
                                 </div>
                               )}

                            </form>
                          </motion.div>
                        )}
                      </AnimatePresence>
                   </div>

                   {/* Toggle Login/Signup */}
                   <div className="text-center mt-6 text-sm text-slate-500 dark:text-gray-400">
                      {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                      <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-gameTeal dark:text-gameGold font-bold hover:underline"
                      >
                         {isLogin ? 'Register Now' : 'Log In'}
                      </button>
                   </div>

                </div>
             </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
