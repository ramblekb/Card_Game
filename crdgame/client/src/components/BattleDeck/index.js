import React from "react";
import "./style.css";

// insert props in DeckCard
function BattleDeck() {
  return (

<div>
    <div className="container-fluid pickedDeck">
    
    <h1 className="pickDeck">Pick Your Deck</h1>
    <div className="divider"></div>
    
 
    <div className="row">

      <div classname="container">
      <div className="col s12 m6 s2">
      <div className="card" id="deckCard" onClick="">
      <div className="img-container">
        <img src="../mars.jpg" alt="" num= "6" />
</div>
</div>
</div>
  </div>








   </div>
   </div>
   </div>
 
  );
}

export default BattleDeck;