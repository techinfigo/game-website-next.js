'use client';

import React from 'react';
import LoginModal from './LoginModal';
import { useAuth } from '@/providers/AuthProvider';

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
