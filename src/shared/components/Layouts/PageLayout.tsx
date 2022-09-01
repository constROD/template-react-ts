import { PageLayoutWrapper } from './PageLayout.styled';

import Footer from '../Partials/Footer';
import Navbar from '../Partials/Navbar';

import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const PageLayout: React.FC = () => {
  return (
    <PageLayoutWrapper>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="content-main">
          <Outlet />
        </div>
      </Suspense>
      <Footer />
    </PageLayoutWrapper>
  );
};

export default PageLayout;
