'use client';

import React from 'react';
import Navbar from './Navbar';
import { useAuth } from '@/providers/AuthProvider';

const NavbarWrapper: React.FC = () => {
  const { openLogin, isLoggedIn, logout, profile } = useAuth();
  
  return (
    <Navbar 
      openLogin={openLogin}
      isLoggedIn={isLoggedIn}
      onLogout={logout}
      profile={profile}
    />
  );
};

export default NavbarWrapper;
