import HomePage from 'pages/Home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from 'shared/constants/Routes';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
    </Routes>
  );
};

export default App;
