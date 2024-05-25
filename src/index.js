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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 // 1 hora
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}/>
      </QueryClientProvider>
    </AppProvider>
  // </React.StrictMode>
);
