import React, { useContext } from "react";
import MyContext from "../context/MyContext";

export default function Test() {
  const theme = useContext(MyContext);

  const toggleTheme = () => {
    // Effectuez les changements de thème ici en fonction de l'état actuel
    // Utilisez `setTheme` pour mettre à jour le thème dans le contexte
  };

  return (
    <div style={theme.dark}>
      <center>
        <h1>Ceci est un composant 'Test.jsx'</h1>
        <button style={theme.light} onClick={() => theme.dark}>
          Dark/Light
        </button>
      </center>
    </div>
  );
}