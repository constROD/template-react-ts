import { Footer, Navbar } from 'modules/partials';
import React, { type ReactNode } from 'react';

export const PageLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content-main">{children}</div>
      <Footer />
    </div>
  );
};
