// vite-env.d.ts
/// <reference types="vite-plugin-pages/client-react" />

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { RootLayout } from 'shared/components/Layouts';
import { STAGE, STAGES } from 'shared/constants/Environment';

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
      <RootLayout>{useRoutes(routes)}</RootLayout>
      {STAGE === STAGES.Dev && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
};

export default App;
