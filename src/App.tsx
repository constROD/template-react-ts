import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AboutPage from 'pages/About';
import HomePage from 'pages/Home';
import LoginPage from 'pages/Login';
import NotFoundPage from 'pages/NotFound';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthenticatedRoute from 'shared/components/AuthenticatedRoute';
import PageLayout from 'shared/components/Layouts/PageLayout';
import RootLayout from 'shared/components/Layouts/RootLayout';
import { STAGE, STAGES } from 'shared/constants/Environment';
import { ROUTES } from 'shared/constants/Routes';
import { GlobalStyle, theme, ThemeProvider } from 'shared/theme';

const App: React.FC = () => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retryDelay: 1250,
            staleTime: 1000 * 60 * 10,
          },
        },
      })
  );

  return (
    <RootLayout>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes>
            <Route element={<AuthenticatedRoute />}>
              <Route element={<PageLayout />}>
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.ABOUT} element={<AboutPage />} />
              </Route>
            </Route>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ThemeProvider>
        {STAGE === STAGES.Dev && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </RootLayout>
  );
};

export default App;
