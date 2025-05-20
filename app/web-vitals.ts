import type { Metric } from 'web-vitals';

export const reportWebVitals = (metric: Metric) => {
  console.log('[WebVitals]', metric);
};
