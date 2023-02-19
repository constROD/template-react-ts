import Footer from '../Partials/Footer';
import Navbar from '../Partials/Navbar';

import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const PageLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="content-main">
          <Outlet />
        </div>
      </Suspense>
      <Footer />
    </div>
  );
};

export default PageLayout;
