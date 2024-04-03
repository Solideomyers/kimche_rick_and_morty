import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import './index.css';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import { TanStackProvider } from './plugins/tanstackquery/TanStackProvider';
import { ApolloProvider } from '@apollo/client';
import { client } from './plugins/apollo/apollo';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <TanStackProvider>
        <NextUIProvider>
          <RouterProvider router={router} />
        </NextUIProvider>
      </TanStackProvider>
    </ApolloProvider>
  </React.StrictMode>
);
