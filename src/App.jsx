import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import "./App.css";
import "./style.scss";
import "./flags.css";

import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";
import Accueil from "./pages/Accueil";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Accueil />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/inscription" element={<Inscription />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}