'use client';

import React from 'react';
import LoginModal from './LoginModal';
import { useAuth } from '@/providers/AuthProvider';

const LoginModalWrapper: React.FC = () => {
  const { isLoginOpen, closeLogin } = useAuth();
  
  return (
    <LoginModal 
      isOpen={isLoginOpen}
      onClose={closeLogin}
      onSuccess={closeLogin}
    />
  );
};

export default LoginModalWrapper;
