'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import PdfProductPage from '@/components/PdfProductPage';

export default function ResourceProductRoute() {
  const params = useParams();
  const raw = (params?.id ?? '') as string | string[];
  const id = Array.isArray(raw) ? raw[0] : raw;
  return <PdfProductPage id={id} />;
}
