import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProviders from './Providers/AuthProviders';
import PrivateRoute from './Routes/PrivateRoute';
import Order from './components/Order';


const router = createBrowserRouter([{
  path:'/',
  element: <Main></Main>,
  children: [
    {path: '/',
    element: <Home></Home>

    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    },
    {
      path: '/order',
      element: <PrivateRoute><Order></Order></PrivateRoute>
    }
  ]

 
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router= {router}></RouterProvider>
    </AuthProviders>
 
  </React.StrictMode>,
)
