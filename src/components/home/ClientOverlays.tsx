'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { AuthCallbackHandler } from './AuthCallbackHandler';

const WelcomeModal = dynamic(
  () => import('./WelcomeModal').then((mod) => mod.WelcomeModal),
  { ssr: false }
);

export default function ClientOverlays() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Defer loading non-critical modals until main thread is completely idle
    const timer = setTimeout(() => {
      setMounted(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AuthCallbackHandler />
      {mounted && <WelcomeModal />}
    </>
  );
}
