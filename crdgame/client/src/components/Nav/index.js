import React from 'react'
import "./style.css";




function Nav(){
  return (
    
   
<div className="header"> 
  <div className="nav-content">
    <ul className="tabs tabs-transparent">
      <li className="tab purple"><a className="active" href="/">Home</a></li>
      <li className="tab purple"><a className="active" href="/Login">Login</a></li>
      <li className="tab purple"><a className="active" href="/Deck">Deck</a></li>
      <li className="tab purple"><a className="active" href="/Battle">Battle</a></li>
      <li className="tab purple"><a className="active" href="/Signup">SignUp</a></li>
      <li className="tab purple"><a className="active" href="/Users">Users</a></li>
      {/* <li className="tab purple"><a className="active" href="/Griddy">Griddy</a></li>
      <li className="tab purple"><a className="active" href="/Fight">Fight</a></li> */}





    </ul>
  </div>

  <div className="App-header">
  <h1 className="title">SPACE CARDS</h1>
  </div>


  </div>
 
  )
}
export default Nav;