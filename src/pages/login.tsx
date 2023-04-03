import Login from 'modules/login';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from 'shared/constants/commons';
import { useUserStore } from 'shared/store';

const LoginPage: React.FC = () => {
  const isSignedIn = useUserStore(state => state.computed.isSignedIn);

  if (isSignedIn) return <Navigate to={ROUTES.ABOUT} />;

  return <Login />;
};

export default LoginPage;
