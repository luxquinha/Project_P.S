import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CategoriesPage from './pages/CategoriesPage'
import SearchPage from './pages/SearchPage'
import MyActivitiesPage from './pages/MyActivitiesPage';
import { AppProvider } from './contexts';
import App from './App';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
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
      },
      {
        path: '/categorias/:tipoCategoria',
        element: <CategoriesPage/>
      },
      {
        path: '/pesquisa/:q',
        element: <SearchPage/>
      },
      {
        path: '/minhaAtividade/:atividade',
        element: <MyActivitiesPage/>
      }
    ]
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
