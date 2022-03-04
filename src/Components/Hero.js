import React from "react";
import reactDom from "react-dom";
import './style.css'
import heroimg from './heroimg.png'

export default function Hero(){
    return(
        <div className="Hero">
            <img src={heroimg} />
            <h1>
                Online Experiences
            </h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}