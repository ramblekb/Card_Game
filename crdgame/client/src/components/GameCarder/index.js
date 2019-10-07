import React from "react";
import "./style.css";

// insert props in DeckCard
function GameCarder() {
  return (

<div>
<div>
    <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="images/office.jpg" alt="yo">
    </img>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><div href="#">This is a link</div></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
  </div>
  </div>
  </div>

  )}
export default GameCarder;