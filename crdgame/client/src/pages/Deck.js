import React from 'react'
import DeckCard from '../components/DeckCard'
import PickedDeck from '../components/PickedDeck'
import Title from '../components/Title'
import Nav from '../components/Nav'



function Deck(){
    return (
        <div>
        <Nav />
        <Title />
        
<DeckCard />

<PickedDeck />


        </div>
        )
      }
    export default Deck;
    