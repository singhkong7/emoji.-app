import React from "react";
import './card.css';

function Card({id,name,symbol,meaning})
{
  return (
    <div className="card">
      <div className="top">
        <p className="key">{id}</p>
        <h2 className="name">{name}</h2>
        <img className="circle-img" src={symbol} alt=" "/>
      </div>
      <div className="bottom">
        <h3 className="info">{meaning}</h3>
      </div>
    </div>


  );
  
}

export default Card;