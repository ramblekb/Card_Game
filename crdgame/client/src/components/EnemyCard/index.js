import React from 'react'
import "./style.css";
import Meter from '../Meter'
// import FlipCard from '../FlipCard';
import VertIcon from '../VertIcon';
import ZoomCard from '../ZoomCard';
import FlipCard from '../FlipCard';



// not quite a enemy card


function EnemyCard(){
  return (
    <div>

    {/* <div className="container-fluid" id="enemyCard">Enemy Card */}


    <div class="row">
    <div class="col s12 m6 l2">
 {/* <VertIcon /> */}

 </div>
  </div>

  <table>
 <tbody>
          <tr>
            <td>Alvin
            <FlipCard />
            </td>
            <td>Eclair
            <ZoomCard /></td>
            <td>$0.87
            <FlipCard /></td>
            </tr>
        </tbody>
        </table>

<table>
        <tbody>
          <tr>
            <td>Alvin
            <FlipCard /></td>
            <td>Eclair
            <FlipCard /></td>
            <td>$0.87
            <FlipCard /></td>
            </tr>
        </tbody>
        
      </table>


  </div>
  // </div>
  
  

  )
}
export default EnemyCard;
