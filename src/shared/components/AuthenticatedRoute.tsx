import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { ROUTES } from 'shared/constants/Routes';
import { useUserStore } from 'shared/store';

const AuthenticatedRoute: React.FC = () => {
  const location = useLocation();
  const isSignedIn = useUserStore(state => state.computed.isSignedIn);

  if (!isSignedIn) return <Navigate to={ROUTES.LOGIN} state={{ from: location }} />;

  return <Outlet />;
};

export default AuthenticatedRoute;
