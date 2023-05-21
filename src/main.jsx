import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Register from './components/Register/Register';
import AuthProvider from './providers/Authprovider';
import Login from './components/Login/Login';
import MyToys from './components/MyToys/MyToys';
import AddToy from './components/AddToy/AddToy';
import AllToys from './components/AllToys/AllToys';
import PrivateRoute from './privateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/myToys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: "/addToy",
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
        <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
