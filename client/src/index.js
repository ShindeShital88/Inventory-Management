import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './View/Home/Home.js'
import Contact from './View/Contact/Contact.js'
const routes =createBrowserRouter([


  {
    path:'/',
    element:<Home/>
},
{
    path:'/contact',
    element:<Contact/>
}



])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <RouterProvider router={routes}/>
   </>
);



