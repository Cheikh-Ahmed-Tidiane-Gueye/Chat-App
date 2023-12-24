import React, {  } from "react";
import { InputText } from "primereact/inputtext";
import addimg from '../assets/gif/addimg.gif'
import trombone from "../assets/gif/trombone.gif";
import envoye from "../assets/icons/send2.png";

export default function Input() {

  return (
    <div className="input">
      <InputText
        className="inputText"
        placeholder="Saisissez votre message ici"
        type="text"
      />
      <div className="send">
        <img
          src={trombone}
          alt=""
          className=""
          style={{ width: "35px", height: "35px" }}
        />
        <input type="file" style={{ display: "none" }} id="file" className="inputFile" />
        <label htmlFor="">
          <img
            src={addimg}
            alt=""
            className="icon2"
            style={{ width: "35px", height: "35px" }}
          />
        </label>
        <button>
          <img
            src={envoye}
            alt=""
            className="ronded-circle px-2"
            style={{ width: "50px", height: "35px" }}
          />
        </button>
      </div>
    </div>
  );
}
{/*  */}