import React, { Component } from 'react'
import "./style.css";
import FlipCard from "../FlipCard"
import ContainerBattle from "../ContainerBattle"
import ZoomCard from "../ZoomCard"
import axios from "axios";





class BattleDeck extends Component{
    state= {
        testCard:   {
            name: "One",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1024px-OSIRIS_Mars_true_color.jpg",
            color: "green",
            cost: 5,
            damage: "8",
            date: new Date(Date.now())
          }
    }
    cardClicked = event => {
        let accessString = localStorage.getItem('JWT');
        console.log(this.state.deckId)
        console.log(event.currentTarget.attributes.getNamedItem("data-id").value)
        let selected = event.currentTarget.attributes.getNamedItem("data-id").value
        axios.get("/api/cards/" + selected,{headers: { Authorization: `JWT ${accessString}` }})
          .then(res => {
            let yourDeck = this.state.deck;
            let yourDeckId = this.state.deckId;
            if ((yourDeckId.length < 6) && (yourDeckId.indexOf(selected) < 0)) {
              yourDeck.push(res.data)
              yourDeckId.push(selected)
              this.setState({ deck: yourDeck, deckId: yourDeckId })
            }
          }
          )
          .catch(err => console.log(err));
      }
   render() 
  {return (
  <div>
    <div class="row">
    <div class="col s12 m6 l2">

</div>
</div>


  <table>
 <tbody>
 
          <tr>
            <td>Enemy Card
            <ContainerBattle />
            </td>
            {/* <td>WINNER!
            <ZoomCard />
            </td> */}
            <td>Your Card
            <ContainerBattle />
            </td>
            </tr>
        </tbody>
        </table>

<table>
<h1 className="pickDeck">Choose Your Card To Play</h1>

        <tbody>
          <tr>
            <td>Card Name
            <FlipCard Card={this.state.testCard} onClick={this.cardClicked}/></td>
            <td>Card Name
            <FlipCard Card={this.state.testCard} onClick={this.cardClicked}/></td>

            <td>Card 
            <FlipCard Card={this.state.testCard} onClick={this.cardClicked}/></td>
            </tr>
        </tbody>
        
      </table>


</div>


        )}
      }
export default BattleDeck;
    