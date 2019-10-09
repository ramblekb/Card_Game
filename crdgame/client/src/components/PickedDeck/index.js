import React from 'react'
import "./style.css";
import ZoomCard from '../ZoomCard'
import FlipCard from '../FlipCard'

import Mars from '../images/mars.jpg'
// import GameCard from "../GameCard"

function PickedDeck(props) {

  return (
    <div>
    <div class="row">
    <div class="col s12 m6 l2">
    <button className="waves-effect waves-light btn" id="saveB" onClick={props.handleSave}>Save Deck</button>
    <button className="waves-effect waves-light btn" id="deleteB" onClick={props.handleSave}>Clear Deck</button>
    <h1 className="pickDeck">Your Cards (Picked Deck)</h1>
    {/* <div className="divider"></div> */}
    <div id="testOne">
    <div class="row">
    <div class="col s12 m6 l2">
    {props.deck.map(Card => (
            <FlipCard Card={Card} />
          ))}
    </div>
    <div class="col s12 m6 l2">
    <FlipCard />
    </div>
  </div>
</div>
</div>
</div>
</div>
  )
}
export default PickedDeck;
