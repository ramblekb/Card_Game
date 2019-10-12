import React from 'react'
import "./style.css";




function Health(props) {
  return (


    <div>


      <div>


        <div class="event_desc" id="gauge">

          <meter min="0" max="100" low="25" high="75" optimum="100" value={props.hp}></meter>
          <p>Mana</p>

        </div>

      </div>


      {/* <div className="gauge">
    <div className="vertical-menu">
   

      <progress value="50" max="100"></progress>
      <p id="health">Health</p>
      
</div>
    </div> */}



    </div>




  )
}
export default Health;