import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutUs from './componets/AboutUs'
import ContactUs from './componets/ContactUs'
import Error from './componets/Error'
import BodyComponent from './componets/BodyComponent.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <BodyComponent /> },
      { path: "about", element: <AboutUs /> },
      { path: "contact", element: <ContactUs /> }
    ],
    errorElement: <Error />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
