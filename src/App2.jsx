import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  // Navigate,
  // useNavigate,
  // Link
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

import "./App.css";
import "./style.scss";
import "./flags.css";

export default function App() {

  const [theme, setTheme] = useState('light')
   
  const rooter = createBrowserRouter([
    {
      path: "/",
      element: <Test/>
    }
  ]);

  return (
    <>
      <AuthContext.Provider value={""}>
        <RouterProvider router={rooter} />;
      </AuthContext.Provider>
    </>
  );
}
