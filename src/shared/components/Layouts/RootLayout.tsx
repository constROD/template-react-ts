import { RootLayoutWrapper } from './RootLayout.styled';

import React from 'react';

const RootLayout: React.FC<{ children: any }> = ({ children }) => {
  return <RootLayoutWrapper>{children}</RootLayoutWrapper>;
};

export default RootLayout;
