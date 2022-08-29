import AboutPage from 'pages/About';
import HomePage from 'pages/Home';
import LoginPage from 'pages/Login';
import NotFoundPage from 'pages/NotFound';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthenticatedRoute from 'shared/components/AuthenticatedRoute';
import PageLayout from 'shared/components/Layouts/PageLayout';
import { ROUTES } from 'shared/constants/Routes';

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route element={<AuthenticatedRoute />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        </Route>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
