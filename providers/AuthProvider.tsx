'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  user: any | null;
  isLoginOpen: boolean;
  setIsLoginOpen: (open: boolean) => void;
  openLogin: () => void;
  closeLogin: () => void;
  login: (userData: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Initialize from localStorage if available
  useEffect(() => {
    const storedUser = localStorage.getItem('mock_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);
  
  const login = (userData: any) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem('mock_user', JSON.stringify(userData));
    setIsLoginOpen(false);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('mock_user');
  };

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, 
      user, 
      isLoginOpen, 
      setIsLoginOpen, 
      openLogin, 
      closeLogin, 
      login,
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
