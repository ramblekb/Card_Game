

import React from 'react'
import "./style.css";
import VerticalSlider from '../VerticalSlider'

import Mars from '../mars.jpg'




function YouPlay(){

// maybe onClick event listener here 
  return (
    <div>
    
    <div className="container-fluid">
    <div className="float-right">
    {/* <a className="waves-effect waves-light btn">Save Deck</a> */}
    </div>
             
    <h1 className="pickedDeck">Play Your Card</h1>
    
    <div className="divider"></div>
    
 
    <div className="row">

     

  <div className="row">


  <VerticalSlider />
      <div classname="container">
      
      <div className="col s12 m6 s2">
      
      <div className="card" id="deckCard" onClick="">
      
      <div className="img-container">
      
        <img src={Mars} alt="" />
        
</div>


</div>

</div>

  </div>
  </div>

  <div className="row">
      <div classname="container">
      <div className="col s12 m6 s2">
      <div className="card" id="deckCard" onClick="">
      <div className="img-container">
        <img src={Mars} alt="" />
</div>
</div>
</div>
  </div>
  </div>
    
    <div className="row">
      <div classname="container">
      <div className="col s12 m6 s2">
      <div className="card" id="deckCard" onClick="">
      <div className="img-container">
        <img src={Mars} alt="" />
</div>
</div>
</div>
  </div>
  </div>


    
  

  
  </div>
  </div>
  </div>

  )
}
export default YouPlay;

