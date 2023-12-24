import React from 'react'
import Messages from './Messages';
import Input from "./Input";

// import Cam from "../assets/icons/cam.png";
// import Add from "../assets/icons/add.png";
// import More from "../assets/icons/more.png";

export default function Chat() {

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons mx-3">
          <i className="img pi pi-video" />
          <i className="img pi pi-user-plus" />
          <i className="img pi pi-ellipsis-h" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
}