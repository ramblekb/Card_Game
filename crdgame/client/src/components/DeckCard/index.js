import React from "react";
import "./style.css";
import FlipCard from "../FlipCard"
import ZoomCard from "../ZoomCard"

// import { checkPropTypes } from "../../../../../../../Library/Caches/typescript/3.6/node_modules/@types/prop-types";

// insert props in DeckCard
function DeckCard() {
  return (

<div>


<div id="testOne">
<div class="row">
    <div class="col s12 m6 l3">
      <FlipCard />
    </div>
    <div class="col s12 m6 l3">
    <FlipCard />
    </div>
    <div class="col s12 m6 l3">
    <FlipCard />
    </div>
    <div class="col s12 m6 l3">
    <FlipCard />
    </div>
  </div>

  <div class="row">
    <div class="col s12 m6 l3">
      <FlipCard />
    </div>
    <div class="col s12 m6 l3">
    <FlipCard />
    </div>
    <div class="col s12 m6 l3">
    <FlipCard />
    </div>
    <div class="col s12 m6 l3">
    <FlipCard />
    </div>
  </div>
  </div>


    <div className="container-fluid pickedDeck">
    
    <h1 className="pickDeck">Pick Your Deck (Deck Card)</h1>
    <div className="divider"></div>
    
 
    <div className="row">

    {/* <div className="row">
   
   <div className="col s12 m6 s2">
   <div className="card" onClick="">
   <ZoomCard />

</div>

</div>
</div> */}

     

  
   




   </div>
   </div>
   </div>
 
  );
}

export default DeckCard;