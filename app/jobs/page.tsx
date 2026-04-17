'use client';

import React from 'react';
import JobNotificationsPage from '@/components/JobNotificationsPage';
import { useAuth } from '@/providers/AuthProvider';

export default function Jobs() {
  const { isLoggedIn, openLogin } = useAuth();
  return (
    <JobNotificationsPage 
      isLoggedIn={isLoggedIn}
      openLogin={openLogin}
    />
  );
}
