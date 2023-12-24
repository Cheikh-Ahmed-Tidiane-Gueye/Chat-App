import React from "react";

import email from "../assets/icons/email.png";
import password from "../assets/icons/password.png";
import logo from "../assets/logo/chat-app-icon-1.png";
// import logo from "../assets/gif/colombe.gif";

export default function Connexion() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo d-flex">
          <img src={logo} alt="" className="logo mylogo" />
        </span>
        <span className="title">Connexion</span>
        <form action="" className="">
          <div className="input-group mb-2">
            <span className="input-group-text" id="basic-addon1">
              <img src={email} alt="" className="icon2" />
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="dresse email"
              aria-label="email"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-2">
            <span className="input-group-text" id="basic-addon1">
              <img src={password} alt="" className="icon2" />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Mot de passe"
              aria-label="mot de passe"
              aria-describedby="basic-addon1"
            />
          </div>

          <button type="button" className="">
            Se connecter
          </button>
        </form>
        <p>
          Vous n'avez pas de compte ?
          <span className="text-span"> insciver-vous</span>
        </p>
      </div>
    </div>
  );
}
