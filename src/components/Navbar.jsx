import React, { useState } from 'react'

import logo from "../assets/logo/chat-app-icon-1.png";
import user from "../assets/img/Cheikh.jpg";

import { Button } from "primereact/button";

export default function Navbar() {

    const [loading, setLoading] = useState(false);

    const load = () => {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

  return (
    <div className="navbar">
      <span className="logo">
        <img src={logo} alt="" className="mylogo" />
      </span>
      <div className="user">
        <img src={user} alt="photo de profile" className="img rounded-circle" />
        <span>Cheikh Gueye</span>
        <Button
          label="Sign-out"
          icon="pi pi-sign-out m-1"
          loading={loading}
          onClick={load}
          style={{ marginRight: "5px" }}
          className="rounded-pill px-2 py-1"
        />
      </div>
    </div>
  );
}
