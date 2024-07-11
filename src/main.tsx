import './App.css'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from "./pages/MainPage/MainPage.tsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import RepositoryPage from "./pages/RepositoryPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "repository/:owner/:name",
    element: <RepositoryPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
