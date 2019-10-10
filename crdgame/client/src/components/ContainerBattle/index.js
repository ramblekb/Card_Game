import React from "react";
import "./style.css";
import Mars from '../images/mars.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Health from '../Health';
import Verticon from '../VertIcon';



// insert props in DeckCard
function ContainerBattle() {
  return (

<div>



<div className="container" id="containerBattle">
<i class="fas fa-hands-helping"></i>
<div className="costDamage">
<span className="collection-item hp">
<span className="EnemyName">SunDudes</span>
<Health />
</span>
</div>
{/* <i class="fas fa-hands-helping"></i>
  <img  src={Mars} className="image">
  </img> 
<span className="collection-item mp">MP
<li className="badge mp">1</li>  */}


<Verticon>
<i class="fas fa-hands-helping"></i>
  <img  src={Mars} className="image">
  </img> 
<span className="collection-item mp">MP
<li className="badge mp">1</li> </span>
</Verticon>


  </div>
  </div>
  
  



  )}
export default ContainerBattle;