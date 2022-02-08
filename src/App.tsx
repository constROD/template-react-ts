import AuthenticatedRoute from 'components/AuthenticatedRoute';
import AboutPage from 'pages/About';
import HomePage from 'pages/Home';
import LoginPage from 'pages/Login';
import NotFoundPage from 'pages/NotFound';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from 'shared/constants/Routes';

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<AuthenticatedRoute />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      </Route>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
