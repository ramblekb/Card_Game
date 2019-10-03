import React, { Component } from 'react'
import axios from "axios";
import DeckCard from '../components/DeckCard'
import PickedDeck from '../components/PickedDeck'
import Title from '../components/Title'
import Nav from '../components/Nav'
import Cookies from 'js-cookie';

class Deck extends Component {
  state = {
    allCard: [],
    deck: [],
    userId: []
  };
  componentDidMount() {
    this.loadCards();
  }

  // Loads all books  and sets them to this.state.books
  loadCards = () => {
    // let accessString = localStorage.getItem('JWT');
    // if(accessString == null){
    //   accessString = Cookies.get('JWT');
    // }
    // axios.get("/api/cards",{headers: { Authorization: `JWT ${accessString}` }})
    axios.get("/api/cards")
      .then(res =>
        this.setState({ loggedIn: true, allCard: res.data })
      )
      .catch(err => console.log(err));

    // axios.get("/api/users/" + 1)
    //   .then(res =>{
    //     this.setState({ userId: res.data })
    //     console.log(this.state.allCard)
    //   }
    //   )
    //   .catch(err => console.log(err));
  };

  cardClicked = event => {
    console.log(this.state.deck)
    let selected = event.target.attributes.getNamedItem("data-id").value
    axios.get("/api/users/" + 1)
      .then(res =>{
        let yourDeck = this.state.deck; 
        yourDeck.push(res.data)
        this.setState({ deck: yourDeck })}
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Nav />

        <Title />

        <DeckCard allCard={this.state.allCard}/>

        <PickedDeck />

      </div>
    )
  }
}
export default Deck;
