import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import './index.css';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import { TanStackProvider } from './plugins/TanStackProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TanStackProvider>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </TanStackProvider>
  </React.StrictMode>
);
