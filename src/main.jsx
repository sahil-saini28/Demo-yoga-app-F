import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './Redux/Store.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SessionDetailpage from './Component/SessionDetailpage.jsx'
// import Singup from './Component/Pages/Singup.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "session/:Id",
    element: <SessionDetailpage />,
  },
  
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
