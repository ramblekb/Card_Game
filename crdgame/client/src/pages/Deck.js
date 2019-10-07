import React from 'react'
import DeckCard from '../components/DeckCard'
import PickedDeck from '../components/PickedDeck'
import Nav from '../components/Nav'



function Deck(){
    return (
        <div>
        <Nav />
        
<DeckCard />

<PickedDeck />


        </div>
        )
      }
    export default Deck;
    