import React, { useState, useEffect } from 'react'
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

export default function Accueil() {

  return (
    <div className='home'>
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}