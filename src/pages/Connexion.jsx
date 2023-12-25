import React from "react";
import { Link } from "react-router-dom";

import email from "../assets/icons/email.png";
import password from "../assets/icons/password.png";
import logo from "../assets/logo/chat-app-icon-1.png";

import { Password } from "primereact/password";

export default function Connexion() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo d-flex">
          <img src={logo} alt="" className="logo mylogo" />
        </span>
        <span className="title">Connexion</span>
        <form action="" className="">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <img src={email} alt="" className="icon2" />
            </span>
            <input
              type="email"
              className="form-control me-4"
              placeholder="dresse email"
              aria-label="email"
              aria-describedby="basic-addon1"
              required
            />
          </div>

          <div className="input-group mb-3 d-flex justify-content-center align items-center">
            <span className="input-group-text" id="basic-addon1">
              <img src={password} alt="" className="icon2" />
            </span>
            <Password placeholder="Mot de passe" toggleMask required />
          </div>

          <button type="button" className="">
            Se connecter
          </button>
        </form>

        <p>
          <span>Vous n'avez pas de compte ?</span>
          <Link to="/inscription" style={{ textDecoration: "none" }}>
            <span className="text-span"> insciver-vous</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
