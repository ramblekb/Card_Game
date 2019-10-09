import React from "react";
import "./style.css";
import FlipCard from "../FlipCard"
// import GameCard from "../GameCard"


// insert props in DeckCard
function DeckCard(props) {
  return (

<div>

<div class="row">
    <div class="col s12 m6 l2">
    
    <h1 className="pickDeck">Pick Your Deck (Deck Card)</h1>

<div id="testOne">
<div class="row">
    <div class="col s12 m6 l2">  
        {props.allCard.map(Card => (
        <FlipCard Card = {Card} onClick={props.cardClicked}/>
            ))}
        </div>

    </div>
    <div class="col s12 m6 l2">  
        {props.allCard.map(Card => (
        <FlipCard Card = {Card} onClick={props.cardClicked}/>
            ))}
        </div>
  </div>

  <div class="row">
  <div class="col s12 m6 l2">  
        {props.allCard.map(Card => (
        <FlipCard Card = {Card} onClick={props.cardClicked}/>
            ))}
        </div>

    
  </div>
  <div class="row">
  <div class="col s12 m6 l2">  
        {props.allCard.map(Card => (
        <FlipCard Card = {Card} onClick={props.cardClicked}/>
            ))}
        </div>
    
  </div>
  {/* <div class="row">
    <div class="col s12 m6 l2">
      <FlipCard />
    </div>
    <div class="col s12 m6 l2">
    <FlipCard />
    </div>
    <div class="col s12 m6 l2">
    <FlipCard />
    </div>
    <div class="col s12 m6 l2">
    <FlipCard />
    </div>
    
  </div> */}
  </div>
   </div>
  </div>

  );
}

export default DeckCard;


 
    // <div>
    //   <div className="container-fluid pickedDeck">

    //     <h1 className="pickDeck">Pick Your Deck</h1>
    //     <div className="divider"></div>

    //     <div className="row">
    //     {props.allCard.map(Card => (
    //     <GameCard Card = {Card} onClick={props.cardClicked}/>
    //         ))}
    //     </div>
    //   </div>
    // </div>