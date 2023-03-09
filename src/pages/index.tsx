import React from 'react';
import { PageLayout } from 'shared/components/Layouts';

const AsyncHome = React.lazy(() => import('modules/Home'));

const HomePage: React.FC = () => {
  return (
    <PageLayout>
      <AsyncHome />
    </PageLayout>
  );
};

export default HomePage;
