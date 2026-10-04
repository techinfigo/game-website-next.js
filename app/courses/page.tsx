import React from 'react';
import CoursesPage from '@/components/CoursesPage';
import { getCourseBanners } from '@/lib/courseBanners';

// Revalidate every 5 minutes so banners edited in the admin panel appear live.
export const revalidate = 300;

export default async function Courses() {
  const banners = await getCourseBanners();
  return <CoursesPage banners={banners} />;
}
