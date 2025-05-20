'use client';

import { useEffect } from 'react';
import { reportWebVitals } from '../web-vitals';
import { onCLS, onFID, onLCP, onTTFB, onFCP } from 'web-vitals';

export default function WebVitalsClient() {
  useEffect(() => {
    onCLS(reportWebVitals);
    onFID(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals);
    onFCP(reportWebVitals);
  }, []);

  return null;
}
