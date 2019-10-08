import React from 'react'
import "./style.css";
import ZoomCard from '../ZoomCard'
import FlipCard from '../FlipCard'

import Mars from '../images/mars.jpg'



function PickedDeck(){

// maybe onClick event listener here 
  return (
    <div>

    <div className="container-fluid"><button className="waves-effect waves-light btn" id="saveB">Save Deck</button><button className="waves-effect waves-light btn" id="deleteB">Clear Deck</button>
    <h1 className="pickDeck">Your Cards (Picked Deck)</h1>
    <div className="float-right">

    <div className="float-right">
    {/* <div className="waves-effect waves-light btn" id="saveB">Save Deck</div> */}
    
    </div>

    <div className="container-fluid">
   
                 
    <div className="divider"></div>
    
 
    <div className="row">
    
    <div className="col s12 m6 l2">
    {/* <div className="card" id="deckCard" onClick=""> */}
  
    <div className="row">
    
    <div className="col col-sm12 col-md6 col-lg2"></div>
  <FlipCard />
  <FlipCard />
  <FlipCard />
  <div className="row">
    
    <div className="col s12 m6 s2"></div>
  <FlipCard />
  <FlipCard />
  <FlipCard />

  {/* <FlipCard />
  <FlipCard />
  <FlipCard /> */}
</div>
</div>
</div>
</div>
    
    
    {/* <div className="row">
      <div classname="container">
      <div className="col s12 m6 s2">
      <div className="card" id="deckCard" onClick="">
      <div className="img-container">
        <img src={Mars} alt="" />
</div>
</div>
</div>
  </div>
  </div> */}

    
  {/* <div className="row">
      <div classname="container">
      <div className="col s12 m6 s2">
      <div className="card" id="deckCard" onClick="">
      <div className="img-container">
        <img src="images/sample-1.jpg" alt="" />
</div>
</div>
</div>
  </div>
  </div> */}









</div>
  </div>
  </div>
  </div>

  )
}
export default PickedDeck;
