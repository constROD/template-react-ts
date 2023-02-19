import React, { ReactNode } from 'react';

const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="relative h-full">{children}</div>;
};

export default RootLayout;
