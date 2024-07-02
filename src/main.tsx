import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomeView from './views/Home/HomeView'
import ShopView from './views/Shop/ShopView'
import ErrorView from './views/Error/ErrorView'
import BikeView from './views/Shop/[nameBike]/BikeView'
import PaymentView from './views/Payment/PaymentView'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
    errorElement: <ErrorView />,
  },
  {
    path: "/bikes",
    element: <ShopView />,
    errorElement: <ErrorView />,
  },
  {
    path: "/bikes/:nameBike",
    element: <BikeView />,
    errorElement: <ErrorView />
  },
  {
    path: "/payment",
    element: <PaymentView />,
    errorElement: <ErrorView />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
