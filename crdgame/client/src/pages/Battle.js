import React from 'react'
import BattleDeck from '../components/BattleDeck'
import UserPlay from '../components/UserPLay'
import Title from '../components/Title'
import Nav from '../components/Nav'
import DeckCard from '../components/DeckCard'



function Battle(){
    return (
        <div>
        <Nav />
        <Title />
        
<UserPlay />
<BattleDeck />

<PickedDeck />


        </div>
        )
      }
    export default Battle;
    