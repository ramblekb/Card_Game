import React from "react";
import "./style.css";
import Mars from '../images/mars.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// insert props in DeckCard
function ZoomCard() {
  return (

<div>
<div className="container" id="zoomCard">
  <img  src={Mars} onClick="" alt="Avatar" className="image">
  </img>
  <div className="overlay">
    <img src={Mars} onClick="" alt="Avatar" className="image"></img>
  </div>

  </div>
  </div>

  )}
export default ZoomCard;