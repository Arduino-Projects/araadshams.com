'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initAmplitude, trackPageView } from '@/lib/amplitude';

export function AmplitudeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize Amplitude
  useEffect(() => {
    initAmplitude();
  }, []);

  // Track page views
  useEffect(() => {
    // Extract page name from pathname
    const pageName = pathname === '/' 
      ? 'home' 
      : pathname.slice(1).replace(/\//g, '_');
    
    trackPageView(pageName);
  }, [pathname, searchParams]);

  return <>{children}</>;
} 