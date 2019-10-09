import React from "react";
import "./style.css";
import FlipCard from "../FlipCard"
import ZoomCard from "../ZoomCard"


// insert props in DeckCard
function DeckCard() {
  return (

<div>

<div class="row">
    <div class="col s12 m6 l2">
    
    <h1 className="pickDeck">Pick Your Deck (Deck Card)</h1>
    {/* <div className="divider"></div> */}
    
 
    {/* <div className="row"> */}

<div id="testOne">
<div class="row">
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
  </div>

  <div class="row">
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
    
  </div>
  <div class="row">
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
    
  </div>
  <div class="row">
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
    
  </div>
  </div>


   </div>
  //  </div>
  //  </div>
 
  );
}

export default DeckCard;