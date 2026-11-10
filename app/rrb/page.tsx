import React from 'react';
import RrbJeExamPage from '@/components/RrbJeExamPage';
import { getExamContent } from '@/lib/examContent';

// Revalidate every 5 minutes so hero banners edited in the admin panel appear
// live without a redeploy.
export const revalidate = 300;

export default async function Rrb() {
  const content = await getExamContent('rrb');
  return <RrbJeExamPage content={content} />;
}
