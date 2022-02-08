import Layout from 'components/Layout';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from 'shared/constants/Routes';
import { useAppSelector } from 'shared/hooks/useRedux';

const AsyncLogin = React.lazy(() => import('components/Login/Login'));

const LoginPage: React.FC = () => {
  const isAuth = useAppSelector(state => state.user.isAuth);

  if (isAuth) return <Navigate to={ROUTES.HOME} />;

  return (
    <Layout>
      <AsyncLogin />
    </Layout>
  );
};

export default LoginPage;
