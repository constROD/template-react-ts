import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { ROUTES } from 'shared/constants/Routes';
import { useAppSelector } from 'shared/hooks/useRedux';

const AuthenticatedRoute: React.FC = () => {
  const location = useLocation();
  const isAuth = useAppSelector(state => state.user.isAuth);

  if (!isAuth) return <Navigate to={ROUTES.LOGIN} state={{ from: location }} />;

  return <Outlet />;
};

export default AuthenticatedRoute;
