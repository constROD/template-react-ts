import Layout from 'components/Layout';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from 'shared/constants/Routes';
import useAppStore from 'shared/store';

const AsyncLogin = React.lazy(() => import('components/Login/Login'));

const LoginPage: React.FC = () => {
  const isAuth = useAppStore(state => state.isAuth);

  if (isAuth) return <Navigate to={ROUTES.HOME} />;

  return (
    <Layout>
      <AsyncLogin />
    </Layout>
  );
};

export default LoginPage;
