import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './Layouts/Root.jsx';
import Home from './Pages/Home.jsx';
import Product from './Pages/Product.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
import PlantDetails from './Pages/PlantDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'product', element: <Product /> },
      { path: 'contact', element: <Contact /> },
      { path: 'about', element: <About /> },
      { path: 'Plant-Details/:id', element: <PlantDetails /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
