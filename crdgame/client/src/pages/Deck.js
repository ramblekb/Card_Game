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
    userId: ""
  };
  componentDidMount() {
    this.loadCards();
  }

  loadCards = () => {
    let accessString = localStorage.getItem('JWT');
    if(accessString == null){
      accessString = Cookies.get('JWT');
    }
    // axios.get("/api/cards",{headers: { Authorization: `JWT ${accessString}` }})
    axios.get("/api/cards",{headers: { Authorization: `JWT ${accessString}` }})
      .then(res =>
        this.setState({ loggedIn: true, allCard: res.data })
      )
      .catch(err => console.log(err));
    this.setState({userId: this.parseJwt(accessString).id})
    let user = "/api/users/" + this.parseJwt(accessString).id
    axios.get(user, {headers: { Authorization: `JWT ${accessString}` }})
      .then(res =>{
        console.log(res);
        
      }
      )
      .catch(err => console.log(err));
  };

  parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

  cardClicked = event => {
    let accessString = localStorage.getItem('JWT');
    if(accessString == null){
      accessString = Cookies.get('JWT');
    }
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

  handleSave = event => {
    event.preventDefault()
    let accessString = localStorage.getItem('JWT');
      console.log(this.state.deckId.length)
    if (this.state.deckId.length === 6) {
      axios.put("/api/users/" + this.parseJwt(accessString).id, {deck: this.state.deckId},{headers: { Authorization: `JWT ${accessString}` }})
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
