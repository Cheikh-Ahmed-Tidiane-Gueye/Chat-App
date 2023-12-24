import React from 'react'

import { InputText } from "primereact/inputtext";

import cheikh from "../assets/img/Cheikh.jpg";

export default function Search() {

  return (
    <div className="search">
      <div className="searchForm">
        <span className="p-input-icon-right">
          <i className="pi pi-search ps-1" style={{ margin: "-3.8% -2px" }} />
          <InputText
            placeholder="Rechercher"
            className="input p-3 rounded-pill"
            style={{ height: "30px" }}
          />
        </span>
      </div>
      <div className="userChat">
        <img src={cheikh} alt="" className="img rounded-circle" />
        <div className="userChatInfo">
          <span>Cheikh Gueye</span>
        </div>
      </div>
    </div>
  );
}
