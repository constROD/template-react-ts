import React from 'react';

const AsyncHome = React.lazy(() => import('components/Home/Home'));

const HomePage: React.FC = () => {
  return <AsyncHome />;
};

export default HomePage;
