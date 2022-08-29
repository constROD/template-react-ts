import React from 'react';

const AsyncAbout = React.lazy(() => import('components/About/About'));

const AboutPage: React.FC = () => {
  return <AsyncAbout />;
};

export default AboutPage;
