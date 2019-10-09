import React from "react";
import "./style.css";
import FlipCard from "../FlipCard"
import ContainerBattle from "../ContainerBattle"
import ZoomCard from "../ZoomCard"




function BattleDeck(){
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
            <td>Enemy Card
            <ContainerBattle />
            </td>
            <td>WINNER!
            <ZoomCard />
            </td>
            <td>Your Card
            <ContainerBattle />
            </td>
            </tr>
        </tbody>
        </table>

<table>
<h1 className="pickDeck">Choose Your Card To Play</h1>

        <tbody>
          <tr>
            <td>Card Name
            <FlipCard /></td>
            <td>Card Name
            <FlipCard /></td>
            <td>Card Name
            <FlipCard /></td>
            </tr>
        </tbody>
        
      </table>


</div>


        )
      }
export default BattleDeck;
    