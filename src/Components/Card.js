import React from "react";
import reactDom from "react-dom";
import './style.css'
import img1 from './image1.png'
import star1 from './star1.png'

export default function Card(){
    return(
        <div className="Card">
            <section className="Avb"><h3>Sold Out</h3></section><br />
            <img src={img1} className="card-image-section"/>
            <section className="rating">
                <img src={star1} />
                <p> &thinsp; 5.0 <span className="origin" > (6) USA</span></p>
            </section>
                <p className="info">Life lessons from Katie Zoferes</p>
                <p className="price">From $136<span className="origin">&thinsp; / person</span></p>

        </div>
    )
}