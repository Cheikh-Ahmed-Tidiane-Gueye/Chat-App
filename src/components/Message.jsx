import React from 'react'
import fatima from "../assets/img/fatima.jpeg";
import Cheikh from "../assets/img/Cheikh.jpg";

export default function Message() {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={Cheikh} alt="" className=''/>
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={fatima} alt="" className=''/>
      </div>
    </div>
  )
}
