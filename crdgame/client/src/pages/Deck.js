import React, { Component } from 'react'
import DeckCard from '../components/DeckCard'
import PickedDeck from '../components/PickedDeck'
import Title from '../components/Title'
import Nav from '../components/Nav'

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  render() {
    return (
      <div>
        <Nav />
        <Title />

        <DeckCard />

        <PickedDeck />


      </div>
    )
  }
}
export default Deck;
