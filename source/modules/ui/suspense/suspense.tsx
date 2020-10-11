import React from 'react';
import { ISuspenseProps } from './suspense.types';

export const Suspense: React.FC<ISuspenseProps> = ({ children, fallback }) => {
  if (process.env.SSR) {
    return <>{children}</>;
  }
  return <React.Suspense fallback={fallback}>{children}</React.Suspense>;
};
