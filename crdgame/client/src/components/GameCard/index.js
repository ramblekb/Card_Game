import React from "react";
import "./style.css";

// insert props in DeckCard
function GameCard(props) {
  return (


    

    // <div className="row">

      // {/* <div classname="container"> */}
      // {/* <div className="col s12 m6 s2"> */}
      <div class="card" data-id= {props.Card.id}>
        <div class="card-image">
      {/* <div className="card" id="deckCard" onClick=""> */}
      {/* <span class="card-title">name of card</span> */}
      {/* <div className="img-container"> */}
      <span className="card-title">{props.Card.name}</span>
      {/* <h1 className="tote">Card Name</h1> */}

        <img src={props.Card.img} alt="" />

        {/* <ul className="collection">
      <li className="collection-item">Cost<span className="badge">0</span></li>
      <li className="collection-item">Demage<span className="badge">1</span></li>      
    </ul> */}

    {/* <div class="card-content"> */}
        
<ul className="collection">
      <li className="collection-item">Cost<span className="badge">{props.Card.cost}</span></li>
      <li className="collection-item">Damage<span className="badge">{props.Card.damage}</span></li>      
    </ul> 

        </div>
        </div>

//  {/* </div> */}
// {/* <div className="card-content">
// <ul className="collection">
//       <li className="collection-item">Cost<span className="badge">0</span></li>
//       <li className="collection-item">Demage<span className="badge">1</span></li>      
//     </ul>
//         </div> */}
// // </div>
// </div>
  // </div>
  //  </div>
  
 
  );
}

export default GameCard;