import React from 'react';
import AuthenticatedRoute from 'shared/components/AuthenticatedRoute';
import PageLayout from 'shared/components/Layouts/PageLayout';

const AsyncHome = React.lazy(() => import('modules/Home'));

const HomePage: React.FC = () => {
  return (
    <AuthenticatedRoute>
      <PageLayout>
        <AsyncHome />
      </PageLayout>
    </AuthenticatedRoute>
  );
};

export default HomePage;
