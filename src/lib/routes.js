import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import DetailsPage from "../pages/details";
import Layout from "../pages/layout";


export const HOME = "/";
export const DETAILS = "/movies/:id";




export const router = createBrowserRouter([
  {
    path: HOME,
    element: <Layout />,
    children: [
      {
        path: HOME,
        element: <Home />,
      },
      {
        path: DETAILS,
        element: <DetailsPage />,
      },
    ]
  },
]);
