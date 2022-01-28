import App from './App';
import { GlobalStyle, theme, ThemeProvider } from './shared/theme';

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

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
