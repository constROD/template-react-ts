import Layout from 'components/Layout';
import React from 'react';

const AsyncAbout = React.lazy(() => import('components/About/About'));

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <AsyncAbout />
    </Layout>
  );
};

export default AboutPage;
