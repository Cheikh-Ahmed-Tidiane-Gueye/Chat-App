import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyContext from "./context/MyContext";
import Test from "./pages/Test";

export default function App() {
  const theme = {
    dark: {
      background: "#000",
      color: "#FFF",
    },
    light: {
      background: "#FFF",
      color: "#000",
    },
  };

  const rooter = createBrowserRouter([
    {
      path: "/",
      element: <Test />,
    },
  ]);

  return (
    <MyContext.Provider value={theme}>
      <RouterProvider router={rooter} />
    </MyContext.Provider>
  );
}
