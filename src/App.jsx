import { useState } from 'react'

import './App.css'
import "./style.scss";
import "./flags.css";

import Inscription from './pages/Inscription'
import Connexion from './pages/Connexion';
import Accueil from './pages/Accueil';

export default function App() {

  return (
    <>
      <Inscription />  
      {/* <Connexion /> */}
      {/* <Accueil/> */}
    </>
  )
}