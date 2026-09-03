'use client';

import React, { useEffect } from 'react';

export default function ClientOverlays() {
  useEffect(() => {
    // Check if OAuth code is present in URL without subscribing to router searchParams during render
    if (typeof window !== 'undefined' && window.location.search.includes('code=')) {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      if (code) {
        window.location.href = `/auth/callback?code=${encodeURIComponent(code)}`;
      }
    }
  }, []);

  return null;
}
