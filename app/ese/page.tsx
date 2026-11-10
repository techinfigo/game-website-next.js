import React from 'react';
import EseExamPage from '@/components/EseExamPage';
import { getExamContent } from '@/lib/examContent';

// Revalidate every 5 minutes so hero banners edited in the admin panel appear
// live without a redeploy.
export const revalidate = 300;

export default async function Ese() {
  const content = await getExamContent('ese');
  return <EseExamPage content={content} />;
}
