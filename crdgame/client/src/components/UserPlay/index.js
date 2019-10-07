import React from 'react'
import "./style.css";
import Meter from '../Meter'



function UserPlay(){

// maybe onClick event listener here 
  return (
    <div>
    
    <div className="container-fluid" id="enemyCard">
    
    <h1 className="enemyCard">Enemy Card</h1>
    
    
 

 <Meter />
    
    

  {/* <div className="row"> */}
      {/* <div classname="container"> */}
      <div className="col s12 m6 s2"></div>
      <div className="card" id="deckCard" onClick="">
      <div className="img-container">
        <img src="images/sample-1.jpg" alt="" />
</div>
</div>

</div>
  </div>
  // </div>
  // </div>
  

  )
}
export default UserPlay;
