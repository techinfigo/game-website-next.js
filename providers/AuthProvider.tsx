'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/firebase';

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
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
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [initialView, setInitialView] = useState<'login' | 'register'>('login');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setIsLoggedIn(!!firebaseUser);
      if (!firebaseUser) {
        try { localStorage.removeItem('auth_user'); } catch (_) {}
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
      try { localStorage.removeItem('auth_user'); } catch (_) {}
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, 
      user, 
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
