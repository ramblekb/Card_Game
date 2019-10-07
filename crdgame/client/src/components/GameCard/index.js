import React from "react";
import "./style.css";

// insert props in DeckCard
function GameCard() {
  return (
<div>

    <div className="row">
          {/* <div className="col s12 m6 s2"> */}

      {/* <div classname="container"> */}
      <div class="cardDesign">
      {/* <div class="card-image"> */}
      {/* <span className="cardName">CardName</span> */}

      {/* <div className="col s12 m6 s2"> */}
      <div className="card" id="deckCard" onClick="">

      <div className="img-container">
      <span className="cardName">CardName</span>

      <img className="card-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1024px-OSIRIS_Mars_true_color.jpg" alt="" />
      
      
      <div className="costDamage">
<span className="collection-item">Cost


<li className="badge">0</li>
</span>

<span className="collection-item">Demage

<li className="badge">1</li> 
</span>

</div>



</div>

</div>

</div>

</div>
</div>

  );
}

export default GameCard;