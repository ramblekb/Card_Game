import React from "react";
import "./style.css";
import GameCard from "../GameCard"

// insert props in DeckCard
function DeckCard(props) {
  return (

    <div>
      <div className="container-fluid pickedDeck">

        <h1 className="pickDeck">Pick Your Deck</h1>
        <div className="divider"></div>

        <div className="row">
        {props.allCard.map(Card => (
        <GameCard Card = {Card} />
            ))}
        </div>
      </div>
    </div>

  );
}

export default DeckCard;