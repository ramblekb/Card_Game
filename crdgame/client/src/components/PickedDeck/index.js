import React from 'react'
import "./style.css";
import ZoomCard from '../ZoomCard'
import FlipCard from '../FlipCard'

import Mars from '../images/mars.jpg'



function PickedDeck(){

  return (
    <div>

    {/* <div className="container-fluid">
    <button className="waves-effect waves-light btn" id="saveB">Save Deck</button>
    <button className="waves-effect waves-light btn" id="deleteB">Clear Deck</button>
    <h1 className="pickDeck">Your Cards (Picked Deck)</h1>
    <div className="divider"></div> */}

    {/* <div className="float-right">
    
    </div> */}

    {/* <div className="container-fluid"> */}
   

    <div class="row">
    <div class="col s12 m6 l2">
    <button className="waves-effect waves-light btn" id="saveB">Save Deck</button>
    <button className="waves-effect waves-light btn" id="deleteB">Clear Deck</button>
    <h1 className="pickDeck">Your Cards (Picked Deck)</h1>
    {/* <div className="divider"></div> */}

  
    <div id="testOne">

    {/* <tbody> */}
      {/* <table>
        

        <tbody>
          <tr>
            <td>CARD NAME
            <FlipCard />
            </td>
            <td>CARD NAME
            <FlipCard /></td>
            <td>CARD NAME
            <FlipCard /></td>
            <td>CARD NAME
            <FlipCard /></td>
            <td>CARD NAME
            <FlipCard /></td>
            <td>CARD NAME
            <FlipCard /></td>
          </tr>

          </tbody>
      </table> */}


    <div class="row">
    <div class="col s12 m6 l2">
      <FlipCard />
    </div>
    <div class="col s12 m6 l2">
    <FlipCard />
    </div>
    <div class="col s12 m6 l2">
    <FlipCard />
    </div>
    <div class="col s12 m6 l2">
    <FlipCard />
    </div>
    <div class="col s12 m6 l2">
    <FlipCard />
    </div>
    <div class="col s12 m6 l2">
    <FlipCard />
    </div>
    
  </div>


</div> 
</div>
</div>
</div>


  )
}
export default PickedDeck;
