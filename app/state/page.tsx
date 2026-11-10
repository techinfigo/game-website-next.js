import React from 'react';
import StateAeJeExamPage from '@/components/StateAeJeExamPage';
import { getExamContent } from '@/lib/examContent';

// Revalidate every 5 minutes so hero banners edited in the admin panel appear
// live without a redeploy.
export const revalidate = 300;

export default async function State() {
  const content = await getExamContent('state');
  return <StateAeJeExamPage content={content} />;
}
