import React from "react";
import "./style.css";
import Mars from '../images/mars.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Health from '../Health';
import Verticon from '../VertIcon';



// insert props in DeckCard
function ContainerBattle(props) {
  return (

    <div>
      <Verticon />


      <div className="container" id="containerBattle">
        {/* <i class="fas fa-hands-helping"></i> */}
        <div className="costDamage">
          <span className="collection-item hp">
            <span className="EnemyName">{props.name}</span>
            <Health hp = {props.hp} />
          </span>
        </div>
        {/* <i class="fas fa-hands-helping"></i>
  <img  src={Mars} className="image">
  </img> 
<span className="collection-item mp">MP
<li className="badge mp">1</li>  */}



        <i class="fas fa-hands-helping"></i>
        <img src={props.scr} className="image">
        </img>
        <span className="collection-item mp">MP
<li className="badge mp">{props.mana}</li> </span>


      </div>
    </div>





  )
}
export default ContainerBattle;