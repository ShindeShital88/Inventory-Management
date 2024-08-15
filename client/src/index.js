import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './View/Home/Home.js'
import Contact from './View/Contact/Contact.js'
import Ragister from './View/Ragister/Ragister.js';
import Software from './View/Software/Software.js';
const routes =createBrowserRouter([


  {
    path:'/',
    element:<Home/>
},
{
    path:'/contact',
    element:<Contact/>
},
{
  path:'/ragister',
  element:<Ragister/>
},
{
  path:'/software',
  element:<Software/>
}


])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <RouterProvider router={routes}/>
   </>
);



