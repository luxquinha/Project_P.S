import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

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
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);
