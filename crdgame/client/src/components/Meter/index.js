import React from 'react'
import "./style.css";




function Meter(){
  return (
    
    
    <div>
    <div className="gauge">
    <div className="vertical-menu">
      <progress value="50" max="100"></progress>
      <p>Power</p>

</div>
    </div>
  
    <div class="event_desc">
    
      <meter min="0" max="100" low="25" high="75" optimum="100" value="80"></meter>
      <p>Food</p>

    </div>
  
    </div>

  

 
  )
}
export default Meter;