'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/firebase';
import firebaseConfig from '../firebase-applet-config.json';

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [initialView, setInitialView] = useState<'login' | 'register'>('login');

  useEffect(() => {
    const isMock = firebaseConfig.projectId === "remixed-project-id";
    if (isMock) {
      const handleStorageChange = () => {
        const storedUser = typeof window !== 'undefined' ? localStorage.getItem('mock_user') : null;
        if (storedUser) {
          try {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setIsLoggedIn(true);
          } catch (e) {
            console.error('Error parsing mock user', e);
            setUser(null);
            setIsLoggedIn(false);
          }
        } else {
          setUser(null);
          setIsLoggedIn(false);
        }
      };

      // Initial check
      handleStorageChange();

      window.addEventListener('storage', handleStorageChange);
      window.addEventListener('local-auth-change', handleStorageChange);

      return () => {
        window.removeEventListener('storage', handleStorageChange);
        window.removeEventListener('local-auth-change', handleStorageChange);
      };
    } else {
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser);
        setIsLoggedIn(!!firebaseUser);
      });
      return () => unsubscribe();
    }
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
    const isMock = firebaseConfig.projectId === "remixed-project-id";
    if (isMock) {
      localStorage.removeItem('mock_user');
      setUser(null);
      setIsLoggedIn(false);
      window.dispatchEvent(new Event('local-auth-change'));
      return;
    }
    try {
      await auth.signOut();
      setIsLoggedIn(false);
      setUser(null);
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
