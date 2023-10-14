import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// rutas //////////////////////////////////////////////////////
import { routes as ventasRoutes } from './Ventas/routes.tsx';
import { routes as adminRoutes } from './Admin/adminRoutes.tsx';
import { routes as loginRoutes } from './Login/Routes.tsx';
const ROUTES = createBrowserRouter([
  ...ventasRoutes,
  ...adminRoutes,
  ...loginRoutes
])
//////////////////////////////////////////////////////////////

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={ROUTES}/>
  </React.StrictMode>,
)
