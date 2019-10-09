import React from 'react'
import "./style.css";
import GameCard from "../GameCard"



function PickedDeck(props) {

  // maybe onClick event listener here 
  return (
    <div>

      <div className="container-fluid">
        <div className="float-right">
          <a className="waves-effect waves-light btn" onClick={props.handleSave}>Save Deck</a>
        </div>

        <h1 className="pickedDeck">Your Deck</h1>

        <div className="divider"></div>


        <div className="row">
          {props.deck.map(Card => (
            <GameCard Card={Card} />
          ))}

        </div>
      </div>
    </div>

  )
}
export default PickedDeck;