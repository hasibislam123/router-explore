import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>
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
