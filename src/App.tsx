// vite-env.d.ts
/// <reference types="vite-plugin-pages/client-react" />

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import RootLayout from 'shared/components/Layouts/RootLayout';
import { STAGE, STAGES } from 'shared/constants/Environment';
import { GlobalStyle, theme, ThemeProvider } from 'shared/theme';

import routes from '~react-pages';

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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RootLayout>{useRoutes(routes)}</RootLayout>
      </ThemeProvider>
      {STAGE === STAGES.Dev && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
};

export default App;
