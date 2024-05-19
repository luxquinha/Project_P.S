import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { AppProvider } from './contexts';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/sobre',
    element: <AboutPage/>
  },
  {
    path: '/contato',
    element: <ContactPage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <AppProvider>
      <RouterProvider router={routes}/>
    </AppProvider>
  // </React.StrictMode>
);
