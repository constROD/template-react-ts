import Footer from '../Partials/Footer';
import Navbar from '../Partials/Navbar';

import React, { Suspense, type ReactNode } from 'react';

const PageLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="content-main">{children}</div>
      </Suspense>
      <Footer />
    </div>
  );
};

export default PageLayout;
