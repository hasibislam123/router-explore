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
import axios from 'axios';
import LoadingSpinner from './Component/LoadingSpinner.jsx';
import Cart from './Pages/Cart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
    children: [
      { index: true, element: <Home /> },
      { path: 'product', element: <Product /> },
      { path: 'contact', element: <Contact /> },
      { path: 'about', element: <About /> },
      {
        path: 'Plant-Details/:id',
        element: <PlantDetails />,
        loader: async ({ params }) => {
          try {
            const res = await axios.get('/food.json'); // পুরো JSON array
            const plant = res.data.find(p => p.id === parseInt(params.id));
            // if (!plant) {
            //   throw new Response("Not Found", { status: 404 });
            // }
            return plant; // সরাসরি একটি plant object return করা
          } catch (error) {
            console.error("Error loading plant data:", error);
            throw new Error("Failed to load data");
          }
        },
      },
      { path: 'Cart', 
        element: <Cart/> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
