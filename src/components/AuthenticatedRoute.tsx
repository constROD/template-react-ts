import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { ROUTES } from 'shared/constants/Routes';
import useAppStore from 'shared/store';

const AuthenticatedRoute: React.FC = () => {
  const location = useLocation();
  const isAuth = useAppStore(state => state.isAuth);

  if (!isAuth) return <Navigate to={ROUTES.LOGIN} state={{ from: location }} />;

  return <Outlet />;
};

export default AuthenticatedRoute;
