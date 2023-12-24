import React from 'react'
import jane from "../assets/img/jane.jpeg";
import adja from "../assets/img/adja.jpeg";
import lol from "../assets/img/lol.jpeg";
import fatima from "../assets/img/fatima.jpeg";
import jean from "../assets/img/jean.jpeg";
import sim from "../assets/img/sim.jpeg";

export default function Chats() {

  return (
    <div className="chats">
      <div className="userChat">
        <img src={jane} alt="" className="img rounded-circle" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Bonjour</p>
        </div>
      </div>
      <div className="userChat">
        <img src={adja} alt="" className="img rounded-circle" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Bonjour</p>
        </div>
      </div>
      <div className="userChat">
        <img src={lol} alt="" className="img rounded-circle" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Bonjour</p>
        </div>
      </div>
      <div className="userChat">
        <img src={fatima} alt="" className="img rounded-circle" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Bonjour</p>
        </div>
      </div>
      <div className="userChat">
        <img src={jean} alt="" className="img rounded-circle" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Bonjour</p>
        </div>
      </div>
      <div className="userChat">
        <img src={sim} alt="" className="img rounded-circle" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Bonjour</p>
        </div>
      </div>
    </div>
  );
}