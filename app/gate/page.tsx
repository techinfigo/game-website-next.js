import React from 'react';
import GateExamPage from '@/components/GateExamPage';
import { getExamContent } from '@/lib/examContent';

// Revalidate the statically-generated GATE page every 5 minutes so that
// content edited in the admin panel appears live without a redeploy.
export const revalidate = 300;

export default async function Gate() {
  const content = await getExamContent('gate');
  return <GateExamPage content={content} />;
}
