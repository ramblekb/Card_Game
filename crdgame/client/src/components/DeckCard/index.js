import React from "react";
import "./style.css";
import FlipCard from "../FlipCard"

function DeckCard(props) {
  return (

    <div>
      <div className="container-fluid pickedDeck">
​
        <h1 className="pickDeck">Pick Your Deck</h1>
        <div className="divider"></div>
​
      <div className="row">
        {props.allCard.map(Card => (
        <FlipCard Card = {Card} onClick={props.cardClicked}/>
            ))}
        </div>
      </div>
    </div>

  );
}

export default DeckCard;