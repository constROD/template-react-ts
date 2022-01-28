import App from './App';

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle, theme, ThemeProvider } from 'shared/theme';

test('renders learn react link', async () => {
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
