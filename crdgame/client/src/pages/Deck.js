import React from 'react'
import DeckCard from '../components/DeckCard'
import PickedDeck from '../components/PickedDeck'
import Nav from '../components/Nav'
import NuDeck from '../components/NuDeck'




function Deck(){
    return (
        <div>
        <Nav />
        
<NuDeck />

{/* <DeckCard /> */}

<PickedDeck />


        </div>
        )
      }
    export default Deck;
    