import React, { Suspense, type ReactNode } from 'react';
import AuthenticatedRoute from '../AuthenticatedRoute';
import { Footer, Navbar } from '../Partials';

export const PageLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AuthenticatedRoute>
      <div>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <div className="content-main">{children}</div>
        </Suspense>
        <Footer />
      </div>
    </AuthenticatedRoute>
  );
};
