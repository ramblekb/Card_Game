import React from "react";
import "./style.css";

// insert props in DeckCard
function GameCard(props) {
  return (
    <div className="card" data-id={props.Card._id} onClick={props.onClick}>
      <div className="card-image">
        <span className="card-title">{props.Card.name}</span>
        <img src={props.Card.img} alt="" />
        <ul className="collection">
          <li className="collection-item">Cost<span className="badge">{props.Card.cost}</span></li>
          <li className="collection-item">Damage<span className="badge">{props.Card.damage}</span></li>
        </ul>

      </div>
    </div>
  );
}

export default GameCard;