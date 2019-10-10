import React from "react";
import "./style.css";
import Mars from '../images/mars.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// insert props in DeckCard
function ContainerBattle() {
  return (

<div>

<div className="container" id="containerBattle">

<div className="costDamage">
<span className="collection-item hp">
<span className="EnemyName">SunDudes</span>


{/* <span className="collection-item hp">HP */}

{/* <li className="EnemyName">SunDudes</li> */}


{/* <li className="badge hp">0</li> */}
{/* <li className="EnemyName">SunDudes</li> */}
</span>


</div>
{/* insert the "ENEMY CARD" here */}
  <img  src={Mars} className="image">

  
  </img> 

<span className="collection-item mp">MP

<li className="badge np">1</li> 
</span>

  </div>
  </div>

  )}
export default ContainerBattle;