import React from 'react'
import FlipCard from '../FlipCard'
import EnemyCard from '../EnemyCard'





function Bat(){
  return (
    <div>
    
    <div className="responsive-table">
    <table className="resp">
      
    <table>
        <thead>
          <tr>
              <th>Item Name</th>
              <th>Item Price
              <FlipCard />
              </th>

</tr>
 </thead>

        <tbody>
          <tr>
            {/* <td>Alvin
            <FlipCard />
            </td> */}
            <td>Eclair
            <EnemyCard />
            </td>
            {/* <td>Eclair
            <FlipCard />
            </td> */}
            </tr>
        </tbody>
        {/* <tbody>
          <tr>
            <td>Alvin
            <EnemyCard />
            </td>
            <td>Eclair
            <FlipCard /></td>
            <td>$0.87
            <FlipCard /></td>
            </tr>
        </tbody> */}
        {/* <tbody>
          <tr>
            <td>Alvin
            <FlipCard />
            </td>
            <td>Eclair
            <FlipCard /></td>
            <td>$0.87
            <FlipCard /></td>
            </tr>
        </tbody> */}
      </table>
  </table>
  </div>
  </div>
  
  

  )
}
export default Bat;
