import { PageLayout } from 'modules/layouts';
import { PrivateRoute } from 'modules/partialssasd';
import React from 'react';

const AsyncAbout = React.lazy(() => import('modules/about'));

const AboutPage: React.FC = () => {
  return (
    <PrivateRoute>
      <PageLayout>
        <AsyncAbout />
      </PageLayout>
    </PrivateRoute>
  );
};

export default AboutPage;
