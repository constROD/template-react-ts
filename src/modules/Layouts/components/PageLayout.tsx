import { Footer, Navbar } from 'modules/Partials';
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
