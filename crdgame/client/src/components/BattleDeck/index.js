import React, { Component } from 'react'
import "./style.css";
import FlipCard from "../FlipCard"
import ContainerBattle from "../ContainerBattle"
import startImg from "../images/logo192.png"
import axios from "axios";
import { Redirect } from 'react-router-dom'





class BattleDeck extends Component {
  state = {
    redirect: false,
    yourHeath: 10,
    enemyHeath: 10,
    yourFood: 5,
    enemyFood: 5,
    yourName: "eric",
    enemyName: "kip",
    yourActiveScr: startImg,
    enemyActiveScr: startImg,
    deck: [],
    deckId: [],
    handCards: [{
      _id: "5d967be701d20723843a949f",
        name: "One",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1024px-OSIRIS_Mars_true_color.jpg",
      color: "green",
      cost: 5,
      damage: "8",
      date: new Date(Date.now())
    },
    {
      name: "Two",
      img: "https://en.es-static.us/upl/2019/09/jupiter-juno-2-12-2019-e1567611570663.jpg",
      color: "green",
      cost: 4,
      damage: "6",
      date: new Date(Date.now())
    },

    {
      name: "Three",
      img: "https://cdn.mos.cms.futurecdn.net/6f96opossGxtomxQKqZpqh-1024-80.jpg",
      color: "green",
      cost: 3,
      damage: "4",
      date: new Date(Date.now())
    }]
  }
  cardClicked = event => {
    let accessString = localStorage.getItem('JWT');
    let self =this
    // console.log(this.state.deckId)
    let selected = event.currentTarget.attributes.getNamedItem("data-id").value
    axios.get("/api/cards/" + selected, { headers: { Authorization: `JWT ${accessString}` } })
      .then(res => {
        let yourCard = res.data.img;
    console.log(res)
    let hp = self.state.enemyHeath - 8
    let mana = self.state.yourFood - 5
        this.setState({ yourActiveScr: yourCard, enemyHeath: hp, yourFood: mana})
      }
      )
      .catch(err => console.log(err));
    console.log("hi")
    // this.setState({
    //   redirect: true
    // })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/battle' />
    }
  }
  render() {
    return (
      <div>
        {this.renderRedirect()}
        <div class="row">
          <div class="col s12 m6 l2">

          </div>
        </div>


        <table>
          <tbody>

            <tr>
              <td>
                {/* ENEMY CARD */}
                <ContainerBattle hp={this.state.enemyHeath * 10} mana={this.state.enemyFood} name={this.state.enemyName} scr = {this.state.enemyActiveScr}>
                  <td title="badGuy"></td>
                </ContainerBattle>
              </td>

              <td>
                {/* YOUR CARD */}
                <ContainerBattle hp={this.state.yourHeath * 10} mana={this.state.yourFood} name={this.state.yourName} scr = {this.state.yourActiveScr}>
                  <td title="goodGuy"></td>
                </ContainerBattle>
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <h1 className="pickDeck">Choose Your Card To Play</h1>

          <tbody>
            <tr>
              <td>Card Name
            <FlipCard Card={this.state.handCards[0]} onClick={this.cardClicked} /></td>
              <td>Card Name
            <FlipCard Card={this.state.handCards[1]} onClick={this.cardClicked} /></td>

              <td>Card
            <FlipCard Card={this.state.handCards[2]} onClick={this.cardClicked} /></td>
            </tr>
          </tbody>

        </table>


      </div>


    )
  }
}
export default BattleDeck;
