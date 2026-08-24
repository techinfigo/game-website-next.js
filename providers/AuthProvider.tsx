'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/firebase';

export interface StudentProfile {
  name: string;
  phone: string;
  photoURL: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  profile: StudentProfile;
  isLoginOpen: boolean;
  setIsLoginOpen: (open: boolean) => void;
  openLogin: (view?: 'login' | 'register') => void;
  closeLogin: () => void;
  logout: () => Promise<void>;
  initialView: 'login' | 'register';
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (typeof window !== 'undefined') {
      try { return !!localStorage.getItem('auth_user'); } catch (_) {}
    }
    return false;
  });
  const [user, setUser] = useState<User | null>(null);
  const [storedProfile, setStoredProfile] = useState<Partial<StudentProfile>>({});
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [initialView, setInitialView] = useState<'login' | 'register'>('login');

  // The cached profile ({ uid, phone, name }) written by LoginModal is the only
  // identity available until onAuthStateChanged resolves, so keep it in state.
  const readStoredProfile = (): Partial<StudentProfile> => {
    try {
      const raw = localStorage.getItem('auth_user');
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      return {
        name: parsed?.name || '',
        phone: parsed?.phone || '',
        photoURL: parsed?.photoURL || '',
      };
    } catch (_) {
      return {};
    }
  };

  useEffect(() => {
    setStoredProfile(readStoredProfile());
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setIsLoggedIn(!!firebaseUser);
      if (!firebaseUser) {
        try { localStorage.removeItem('auth_user'); } catch (_) {}
        setStoredProfile({});
      }
    });
    return () => unsubscribe();
  }, []);

  // Update isLoggedIn immediately when LoginModal signals a successful sign-in,
  // without waiting for onAuthStateChanged to fire (which can be slow on mobile).
  useEffect(() => {
    const handler = () => {
      try {
        if (localStorage.getItem('auth_user')) setIsLoggedIn(true);
        setStoredProfile(readStoredProfile());
      } catch (_) {}
    };
    window.addEventListener('auth_user_set', handler);
    return () => window.removeEventListener('auth_user_set', handler);
  }, []);

  const openLogin = (view?: 'login' | 'register') => {
    if (view) {
      setInitialView(view);
    } else {
      setInitialView('login');
    }
    setIsLoginOpen(true);
  };
  const closeLogin = () => setIsLoginOpen(false);
  
  const logout = async () => {
    try {
      await auth.signOut();
      setIsLoggedIn(false);
      setUser(null);
      setStoredProfile({});
      try { localStorage.removeItem('auth_user'); } catch (_) {}
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  const profile: StudentProfile = {
    name: user?.displayName || storedProfile.name || '',
    phone: user?.phoneNumber || storedProfile.phone || '',
    photoURL: user?.photoURL || storedProfile.photoURL || '',
  };

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, 
      user, 
      profile, 
      isLoginOpen, 
      setIsLoginOpen, 
      openLogin, 
      closeLogin, 
      logout,
      initialView
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
