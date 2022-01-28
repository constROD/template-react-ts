import { styled } from '../shared/theme';

import React, { ReactNode, Suspense } from 'react';

type Props = {
  children: ReactNode;
};

const LayoutWrapper = styled.div``;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="content-main">{children}</div>
      </Suspense>
    </LayoutWrapper>
  );
};

export default Layout;
