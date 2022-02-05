import HomePage from 'pages/Home';
import LoginPage from 'pages/Login';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from 'shared/constants/Routes';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
    </Routes>
  );
};

export default App;
