import Layout from 'components/Layout';
import React from 'react';

const AsyncLogin = React.lazy(() => import('components/Login/Login'));

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <AsyncLogin />
    </Layout>
  );
};

export default LoginPage;
