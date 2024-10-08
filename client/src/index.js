
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './View/Home/Home.js'
import Contact from './View/Contact/Contact.js'
import Ragister from './View/Ragister/Ragister.js';
import Software from './View/Software/Software.js';
import About from './View/About/Aboutus.js';
import Sign from './View/Sign/Sign.js';
import Signin from './View/Login/Login.js';
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
},
{
path:'/About',
element:<About/>
},
{
  path:'/sign',
  element:<Sign/>
},
{
  path:'/Signin',
  element:<Signin/>
}

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <RouterProvider router={routes}/>
   </>
);



