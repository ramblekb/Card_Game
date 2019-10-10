import React from 'react'
import "./style.css";
import ZoomCard from '../ZoomCard'
import FlipCard from '../FlipCard'

import Mars from '../images/mars.jpg'



function YourTurn(){

// maybe onClick event listener here 
  return (
    <div>

    <div className="container-fluid"><button className="waves-effect waves-light btn" id="saveB">Save Deck</button><button className="waves-effect waves-light btn" id="deleteB">Clear Deck</button>
    <h1 className="pickDeck">Your Cards (Picked Deck)</h1>
    <div className="float-right">

    {/* <div className="float-right"> */}
    {/* <div className="waves-effect waves-light btn" id="saveB">Save Deck</div> */}
    
    </div>

    <div className="container-fluid">
   
                 
    <div className="divider"></div>
    
 
    <div className="row">
    
    <div className="col s12 m6 l2">
    {/* <div className="card" id="deckCard" onClick=""> */}
  
    <div className="row">
    <FlipCard />
    <FlipCard />
    <FlipCard />
     <FlipCard />
     <FlipCard />
     <FlipCard />


   
  </div>

</div>
</div>
</div>
  </div>
  </div>

  )
}
export default YourTurn;