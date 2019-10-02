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

    </ul>
  </div>
  </div>
 
  )
}
export default Nav;