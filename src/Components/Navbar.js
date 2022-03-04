import React from "react";
import reactDom from "react-dom";
import './style.css'
import logo from './airbnb.png'

export default function Navbar(){
    return(
        <div className="Navbar">
            <img src={logo} className="logo" />
        </div>
    )
}