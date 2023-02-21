import React from 'react';
import AuthenticatedRoute from 'shared/components/AuthenticatedRoute';
import PageLayout from 'shared/components/Layouts/PageLayout';

const AsyncAbout = React.lazy(() => import('modules/About'));

const AboutPage: React.FC = () => {
  return (
    <AuthenticatedRoute>
      <PageLayout>
        <AsyncAbout />
      </PageLayout>
    </AuthenticatedRoute>
  );
};

export default AboutPage;
