import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'
import Home from './Pages/Home.jsx'


const router = createBrowserRouter([
  {
    index: true,
    Component:Home
  },
  {
    path:'/Contact',
    Component: Contact
  },
  {
    path:'/About',
    Component: About
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
