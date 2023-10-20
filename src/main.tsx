import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from "@style/GlobalStyle";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; 

import App from './App.tsx';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<GlobalStyle/>
				<App />
			<ReactQueryDevtools />
		</QueryClientProvider>
  </React.StrictMode>,
);
