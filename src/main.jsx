import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  Router,
  RouterProvider
} from "react-router-dom"
import Home from './pages/Home.jsx'
import { SignInProvider } from './context/signInContext'

import Chatroom from './pages/Chatroom.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
 

  {
    path:"/Chatroom",
    element: <Chatroom/>
  },
 
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SignInProvider>
      <RouterProvider router={router}/>
    </SignInProvider>

  </React.StrictMode>,
)
