'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useAuth } from '@/providers/AuthProvider';

// The modal renders nothing while closed, so load it (and the Firebase auth
// code it imports) after the page is interactive instead of up front.
const LoginModal = dynamic(() => import('./LoginModal'), { ssr: false });

const LoginModalWrapper: React.FC = () => {
  const { isLoginOpen, closeLogin, initialView } = useAuth();
  
  return (
    <LoginModal 
      isOpen={isLoginOpen}
      onClose={closeLogin}
      onSuccess={closeLogin}
      initialView={initialView}
    />
  );
};

export default LoginModalWrapper;
