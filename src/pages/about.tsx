import React from 'react';
import { PageLayout } from 'shared/components/Layouts';

const AsyncAbout = React.lazy(() => import('modules/About'));

const AboutPage: React.FC = () => {
  return (
    <PageLayout>
      <AsyncAbout />
    </PageLayout>
  );
};

export default AboutPage;
