import { PageLayout } from 'modules/layoutss';
import { PrivateRoute } from 'modules/partialss';
import React from 'react';

const AsyncAbout = React.lazy(() => import('modules/abouts'));

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
