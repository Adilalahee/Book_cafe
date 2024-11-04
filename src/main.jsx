import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Errorpage from './components/Errorpage/Errorpage';
import Homepage from './components/Home/Homepage';
import Dashboard from './components/Dashboard/Dashboard';
import Bookdetails from './components/bookdetails/Bookdetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:'/',
        element:<Homepage></Homepage>
      },
      {
        path:'books/:bookId',
        element:<Bookdetails></Bookdetails>,
        loader:()=> fetch('../public/booksData.json')
        
      },
      {
        path:'Dashboard',
        element:<Dashboard></Dashboard>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
