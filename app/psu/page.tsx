import React from 'react';
import PsuExamPage from '@/components/PsuExamPage';
import { getExamContent } from '@/lib/examContent';

// Revalidate every 5 minutes so hero banners edited in the admin panel appear
// live without a redeploy.
export const revalidate = 300;

export default async function Psu() {
  const content = await getExamContent('psu');
  return <PsuExamPage content={content} />;
}
