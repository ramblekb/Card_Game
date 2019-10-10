import React from 'react'
import "./style.css";
import FlipCard from '../FlipCard'




function NuDeck(){
  return (
    <div>
        {/* <div id="testOne"> */}

    <div className="responsive-table">
    <table className="resp">
    <h1 className="pickDeck">Pick Your Deck(Nu Deck)</h1>

    <table>
        <thead>
          <tr>
              <th>CARD
              </th>
              <th>CARD
              <FlipCard />
              </th>
              <th>CARD
              <FlipCard />
              </th>
              <th>CARD
              <FlipCard />
              </th>
              <th>CARD
              </th>
              
            
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>CARD
            <FlipCard />
            </td>
            <td>CARD
            <FlipCard /></td>
            <td>CARD
            <FlipCard /></td>
            <td>CARD
            <FlipCard /></td>
            <td>CARD
            <FlipCard /></td>
          </tr>
          <tr>
            <td>CARD
            <FlipCard />
            </td>
            <td>CARD
            <FlipCard /></td>
            <td>CARD
            <FlipCard /></td>
            <td>CARD
            <FlipCard /></td>
            <td>CARD
            <FlipCard />
            </td>
          </tr>
          <tr>
            <td>CARD
            <FlipCard /></td>
            <td>CARD
            <FlipCard /></td>
            <td>CARD
            <FlipCard /></td>
            <td>CARD
            <FlipCard /></td>
            <td>CARD
            <FlipCard /></td>
          </tr>
  
        </tbody>
      </table>



  </table>
  </div>
  </div>
//   </div>

  
  

  )
}
export default NuDeck;
