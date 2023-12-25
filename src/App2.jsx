import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  useNavigate,
  Link
} from "react-router-dom";

import "./App.css";
import "./style.scss";
import "./flags.css";

import Accueil from "./pages/Accueil";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import Test from "./pages/Test";

export default function App() {
   
  const rooter = createBrowserRouter([
    {
      path: "/",
      element: <Accueil />,
    },
    {
      path: "/connexion",
      element: <Connexion />,
    },
    {
      path: "/inscription",
      element: <Inscription />,
    },
  ]);

  return <RouterProvider router={rooter} />;
}
