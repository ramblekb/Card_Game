import React from 'react'
import "./style.css";
import Mars from '../mars.jpg'



function PickedDeck(){

// maybe onClick event listener here 
  return (
    <div>
    
    <div className="container-fluid">
    
    <h1 className="pickedDeck">Your Deck</h1>
    <div className="divider"></div>
    
 
    <div className="row">

      <div classname="container">
      <div className="col s12 m6 s2">
      <div className="card" id="deckCard" onClick="">
      <div className="img-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1024px-OSIRIS_Mars_true_color.jpg" alt="smiley" />
</div>
</div>
</div>
  </div>
    
    <div className="row">
      <div classname="container">
      <div className="col s12 m6 s2"></div>
      <div className="card" id="deckCard" onClick="">
      <div className="img-container">
        <img src={Mars} alt="" />
</div>
</div>
</div>
  </div>

  <div className="row">
      <div classname="container">
      <div className="col s12 m6 s2"></div>
      <div className="card" id="deckCard" onClick="">
      <div className="img-container">
        <img src="images/sample-1.jpg" alt="" />
</div>
</div>
</div>
  </div>

  <div className="row">
      <div classname="container">
      <div className="col s12 m6 s2"></div>
      <div className="card" id="deckCard" onClick="">
      <div className="img-container">
        <img src="images/sample-1.jpg" alt="" />
</div>
</div>
</div>
  </div>
    
  <div className="row">
      <div classname="container">
      <div className="col s12 m6 s2"></div>
      <div className="card" id="deckCard" onClick="">
      <div className="img-container">
        <img src="images/sample-1.jpg" alt="" />
</div>
</div>
</div>
  </div>

  <div className="row">
      <div classname="container">
      <div className="col s12 m6 s2"></div>
      <div className="card" id="deckCard" onClick="">
      <div className="img-container">
        <img src="images/sample-1.jpg" alt="" />
</div>
</div>
</div>
  </div>
  </div>
  </div>
  </div>

  )
}
export default PickedDeck;
