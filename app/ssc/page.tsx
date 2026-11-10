import React from 'react';
import SscJeExamPage from '@/components/SscJeExamPage';
import { getExamContent } from '@/lib/examContent';

// Revalidate every 5 minutes so hero banners edited in the admin panel appear
// live without a redeploy.
export const revalidate = 300;

export default async function Ssc() {
  const content = await getExamContent('ssc');
  return <SscJeExamPage content={content} />;
}
