import { LayoutWrapper } from './Layout.styled';

import React, { Suspense } from 'react';

const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="content-main">{children}</div>
      </Suspense>
    </LayoutWrapper>
  );
};

export default Layout;
