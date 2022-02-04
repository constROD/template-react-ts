import App from './App';
import { GlobalStyle, theme, ThemeProvider } from './shared/theme';

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createStore from 'shared/redux/store';

test('renders learn react link', () => {
  const store = createStore();

  render(
    <BrowserRouter basename="/">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );

  const element = screen.getByText(/Loading.../i);
  expect(element).toBeInTheDocument();
});
