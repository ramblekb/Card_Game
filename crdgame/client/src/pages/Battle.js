import React from 'react'
// import BattleDeck from '../components/BattleDeck'
// import UserPlay from '../components/UserPlay'
import Title from '../components/Title'
import Nav from '../components/Nav'
import DeckCard from '../components/DeckCard'
import PickedDeck from '../components/PickedDeck'
import Meter from '../components/Meter'
import BattleDeck from '../components/BattleDeck'





function Battle(){
    return (
        <div>
        <Nav />
        <Title />
{/* <UserPlay />
<BattleDeck /> */}
<PickedDeck />
<Meter />

        </div>
        )
      }
export default Battle;
    