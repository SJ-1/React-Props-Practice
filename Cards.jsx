import React from "react";
import "./index.css";

let Card = (props) => {
    return(
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <img className="circle-img" src={props.img}/>
            </div>
            <div className="bottom">
                <p className="info">{props.phn}</p>
                <p className="info">{props.email}</p>
            </div>
        </div>
    );
}
 export default Card;
