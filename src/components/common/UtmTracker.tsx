'use client';

import { useEffect } from 'react';
import { captureInitialUtm } from '@/lib/tracking/utm';

export default function UtmTracker() {
  useEffect(() => {
    captureInitialUtm();
  }, []);

  return null;
}
