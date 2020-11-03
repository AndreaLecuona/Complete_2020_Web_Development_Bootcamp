import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.nombre}</h2>
          <img className="circle-img" src={props.foto} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{props.telefono}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
