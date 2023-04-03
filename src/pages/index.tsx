import React from 'react';

const AsyncHome = React.lazy(() => import('modules/homes'));

const HomePage: React.FC = () => {
  return <AsyncHome />;
};

export default HomePage;
