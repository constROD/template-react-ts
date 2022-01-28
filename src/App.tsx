import HomePage from './pages/Home';
import { ROUTES } from './shared/constants/Routes';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
    </Routes>
  );
};

export default App;
