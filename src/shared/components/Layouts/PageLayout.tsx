import { PageLayoutWrapper } from './PageLayout.styled';

import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const PageLayout: React.FC = () => {
  return (
    <PageLayoutWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="content-main">
          <Outlet />
        </div>
      </Suspense>
    </PageLayoutWrapper>
  );
};

export default PageLayout;
