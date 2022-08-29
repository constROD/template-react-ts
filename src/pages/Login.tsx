import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from 'shared/constants/Routes';
import { useUserStore } from 'shared/store';

const AsyncLogin = React.lazy(() => import('components/Login/Login'));

const LoginPage: React.FC = () => {
  const { isSignedIn } = useUserStore(state => state.computed);

  if (isSignedIn) return <Navigate to={ROUTES.HOME} />;

  return <AsyncLogin />;
};

export default LoginPage;
