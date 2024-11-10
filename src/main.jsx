import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Compnents/Home/Home.jsx'
import About from './Compnents/About/About.jsx'

import Projects from './Compnents/Projects/Projects.jsx'
import Layout from './Layout.jsx'
import WebDevPage from './Compnents/WebDev/web.jsx';
import Testimonials from './Compnents/Testimonial/Testimonials.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
       
          <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='project' element={<Projects />}/>
        <Route path='testimonials' element={<Testimonials />}/>
        <Route path='*' element={<div>Not Found</div>} />
        <Route path='web' element={<WebDevPage />} /> 
        </Route>
    )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)