import React from "react";
import "./style.css";

// insert props in DeckCard
function GameCard() {
  return (


    

    <div className="row">

      {/* <div classname="container"> */}
      {/* <div className="col s12 m6 s2"> */}
      <div class="card">
        <div class="card-image">
      {/* <div className="card" id="deckCard" onClick=""> */}
      {/* <span class="card-title">name of card</span> */}
      {/* <div className="img-container"> */}
      <span className="card-title">card name</span>
      {/* <h1 className="tote">Card Name</h1> */}

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1024px-OSIRIS_Mars_true_color.jpg" alt="" />

        {/* <ul className="collection">
      <li className="collection-item">Cost<span className="badge">0</span></li>
      <li className="collection-item">Demage<span className="badge">1</span></li>      
    </ul> */}

    <div class="card-content">
        
<ul className="collection">
      <li className="collection-item">Cost<span className="badge">0</span></li>
      <li className="collection-item">Demage<span className="badge">1</span></li>      
    </ul> 

        </div>
        </div>

 {/* </div> */}
{/* <div className="card-content">
<ul className="collection">
      <li className="collection-item">Cost<span className="badge">0</span></li>
      <li className="collection-item">Demage<span className="badge">1</span></li>      
    </ul>
        </div> */}
</div>
</div>
  // </div>
  //  </div>
  
 
  );
}

export default GameCard;