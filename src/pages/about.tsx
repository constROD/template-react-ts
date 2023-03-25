import { PageLayout } from 'modules/Layouts';
import { PrivateRoute } from 'modules/Partials';
import React from 'react';

const AsyncAbout = React.lazy(() => import('modules/About'));

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
