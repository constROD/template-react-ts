import Login from 'components/Login/Login';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from 'shared/constants/Routes';
import { useUserStore } from 'shared/store';

const LoginPage: React.FC = () => {
  const { isSignedIn } = useUserStore(state => state.computed);

  if (isSignedIn) return <Navigate to={ROUTES.HOME} />;

  return <Login />;
};

export default LoginPage;
