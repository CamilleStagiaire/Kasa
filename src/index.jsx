import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';
import './sass/style.scss';
import { LogementProvider } from './contexts/LogementContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LogementProvider>
      <AppRouter />
    </LogementProvider>
  </React.StrictMode>
);
