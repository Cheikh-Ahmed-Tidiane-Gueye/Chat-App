import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  useNavigate,
  Link
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

import "./App.css";
import "./style.scss";
import "./flags.css";

import Accueil from "./pages/Accueil";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";

export default function App() {

  const [theme, setTheme] = useState('light')
   
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

  return (
    <>
      <AuthContext.Provider value={""}>
        <RouterProvider router={rooter} />;
      </AuthContext.Provider>
    </>
  );
}
