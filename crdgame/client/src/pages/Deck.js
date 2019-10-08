import React, { Component } from 'react'
import axios from "axios";
import DeckCard from '../components/DeckCard'
import PickedDeck from '../components/PickedDeck'
import Nav from '../components/Nav'
import Cookies from 'js-cookie';

class Deck extends Component {
  state = {
    allCard: [],
    deck: [],
    deckId: [],
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

    // axios.get("/api/users/" + "5d96a88b724f144104a912b4")
    //   .then(res =>{
    //     this.setState({ userId: res.data })
    //   }
    //   )
    //   .catch(err => console.log(err));
  };

  cardClicked = event => {
    console.log(this.state.deckId)
    console.log(event.currentTarget.attributes.getNamedItem("data-id").value)
    let selected = event.currentTarget.attributes.getNamedItem("data-id").value
    axios.get("/api/cards/" + selected)
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

  handleSave = event => {
    event.preventDefault()
      console.log(this.state.deckId.length)
    if (this.state.deckId.length === 6) {
      axios.put("/api/users/" + "5d96a88b724f144104a912b4", {deck: this.state.deckId})
      .then(res =>{
        console.log(this.state.deckId.length)
      }
      )
      .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <div>
        <Nav />
        
<DeckCard />


        <DeckCard allCard={this.state.allCard} cardClicked={this.cardClicked} />

        <PickedDeck deck={this.state.deck} handleSave={this.handleSave}/>

      </div>
    )
  }
}
export default Deck;
