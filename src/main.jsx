
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Props from './Pages/Props.jsx'
import StateManagement from './Pages/StateManagement.jsx'
import Login from './Pages/Login.jsx'
import ProfilePage from './Pages/ProfilePage.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Props',
    element: <Props/>
  }
  ,
  {
    path: '/StateManagement',
    element: <StateManagement/>
  }
  ,
  {
    path: '/Login',
    element: <Login/>
  }
  ,
  {
    path: '/ProfilePage',
    element: <ProfilePage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);