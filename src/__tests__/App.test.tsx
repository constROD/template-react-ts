import App from '../App';
import { ThemeProvider, GlobalStyle, theme } from '../shared/theme';

import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(
    <BrowserRouter basename="/">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );

  const element = screen.getByText(/Loading.../i);
  expect(element).toBeInTheDocument();
});
