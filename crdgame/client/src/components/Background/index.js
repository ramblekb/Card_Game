<svg id=svg viewbox=-100,-100,200,200>
    <g></g>
</svg>



let rnd = i => Math.floor(Math.random()*i);
for (var r =0,i=0; i<50; i++, r = 100-i*2)
    svg.innerHTML += `<circle style="--rot:${Math.random()>0.5?360:-360}rad;animation:rr ${300+rnd(900)}s linear infinite"
        stroke=hsla(${rnd(360)},${60+rnd(25)}%,${60+rnd(25)}%,0.8) 
        stroke-dasharray="${Array(2+rnd(r)).fill(0).map(e=>rnd(r)).join(' ')}" r=${r} fill=none ></circle>`





        // import React from 'react'
// // import "./style.css";


// function YouPlay(){

// // maybe onClick event listener here 
//   return (
//     <div>
    
//     <div className="container-fluid">
    
//     <h1 className="YouPlay">Play One of Your Space Cards</h1>
//     <div className="divider"></div>
    
 

//     <div className="row">
//       <div classname="container">
//       <div className="col s12 m6 s2">
//       <div className="card" onClick="">
//       <div className="img-container">
//         <img src="images/sample-1.jpg" alt="" />
// </div>
// </div>
// </div>
//   </div>
//   </div>
    
//   <div className="row">
//       <div classname="container">
//       <div className="col s12 m6 s2">
//       <div className="card" onClick="">
//       <div className="img-container">
//         <img src="images/sample-1.jpg" alt="" />
// </div>
// </div>
// </div>
//   </div>
//   </div>

//   <div className="row">
//       <div classname="container">
//       <div className="col s12 m6 s2">
//       <div className="card" onClick="">
//       <div className="img-container">
//         <img src="images/sample-1.jpg" alt="" />
// </div>
// </div>
// </div>
//   </div>
//   </div>
//   </div>


 
// </div>

  

//   )
// }
// export default YouPlay;




import React from 'react'
import "./style.css";
import Mars from '../mars.jpg'



function BattleDeck(){

// maybe onClick event listener here 
  return (
    <div>
    
    <div className="container-fluid">
    <div className="float-right">
    {/* <a className="waves-effect waves-light btn">Save Deck</a> */}
    </div>
             
    <h1 className="pickedDeck">VS CARD</h1>
    
    <div className="divider"></div>
    
 
    <div className="row">

      {/* <div classname="container" id="decker">
      <div className="col s12 m6 s2">
      <div className="card" onClick="">
      <div className="con">CardName</div>
      <div className="img-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1024px-OSIRIS_Mars_true_color.jpg" alt="smiley" />
</div>
      <div className="con">0</div>

</div>
</div>
  </div> */}

  <div className="row">
      <div classname="container">
      <div className="col s12 m6 s2">
      <div className="card" id="deckCard" onClick="">
      <div className="img-container">
        <img src={Mars} alt="" />
</div>
</div>
</div>
  </div>
  </div>

  


  

  {/* <div className="row">
      <div classname="container">
      <div className="col s12 m6 s2">
      <div className="card" id="deckCard" onClick="">
      <div className="img-container">
        <img src="images/sample-1.jpg" alt="" />
</div>
</div>
</div>
  </div>
  </div> */}
    
  

  
  </div>
  </div>
  </div>

  )
}
export default Background;

