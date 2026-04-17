'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/firebase';

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  isLoginOpen: boolean;
  setIsLoginOpen: (open: boolean) => void;
  openLogin: () => void;
  closeLogin: () => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setIsLoggedIn(!!firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);
  
  const logout = async () => {
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
      logout 
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
