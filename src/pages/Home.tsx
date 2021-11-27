import Layout from 'components/Layout';
import React from 'react';

const AsyncHome = React.lazy(() => import('components/Home'));

const HomePage: React.FC = () => {
  return (
    <Layout>
      <AsyncHome />
    </Layout>
  );
};

export default HomePage;
