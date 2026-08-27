'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const WelcomeModal = dynamic(
  () => import('./WelcomeModal').then((mod) => mod.WelcomeModal),
  { ssr: false }
);

export default function ClientOverlays() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check if OAuth code is present in URL without subscribing to router searchParams during render
    if (typeof window !== 'undefined' && window.location.search.includes('code=')) {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      if (code) {
        window.location.href = `/auth/callback?code=${encodeURIComponent(code)}`;
      }
    }

    // Defer non-critical modals until main thread is idle
    const timer = setTimeout(() => {
      setMounted(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return mounted ? <WelcomeModal /> : null;
}
