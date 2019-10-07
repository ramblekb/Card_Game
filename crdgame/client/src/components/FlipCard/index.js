import React from "react";
import style from "./style.css";
import Jupiter from "../images/jupiter.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



// insert props in DeckCard
function FlipCard() {
    return (
<div>
<Container maxWidth="sm">
            <div className="flip-card">
                <img
                    className="flip-card-front"
                    src={Jupiter}
                    onClick=""
                    alt="Avatar"
                ></img>

                <div className="flip-card-inner">
                    <div className="flip-card-back">
                        <h1 className="red">Space Card</h1>
                        <p className="red fancy">Jupiter</p>
                        <div className="costDamage">
                            <span className="collection-item">
                                Cost
                <li className="badge">0</li>
                            </span>

                            <span className="collection-item">
                                Demage
                <li className="badge">1</li>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        
        
        </Container>
        </div>
    );
}

export default FlipCard;
