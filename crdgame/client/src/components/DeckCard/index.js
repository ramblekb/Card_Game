import React from "react";
import "./style.css";
import GameCard from "../GameCard"
import ZoomCard from "../ZoomCard"

// import { checkPropTypes } from "../../../../../../../Library/Caches/typescript/3.6/node_modules/@types/prop-types";

// insert props in DeckCard
function DeckCard() {
  return (

<div>





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

     

  <ZoomCard />
  <ZoomCard />  <ZoomCard />  <ZoomCard />  <ZoomCard />  <ZoomCard />  <ZoomCard />  <ZoomCard />  <ZoomCard />  <ZoomCard />  <ZoomCard />  <ZoomCard />
  <ZoomCard />  <ZoomCard />  <ZoomCard />  <ZoomCard />  <ZoomCard />  <ZoomCard />
   




   </div>
   </div>
   </div>
 
  );
}

export default DeckCard;