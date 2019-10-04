import React from 'react'
// import BattleDeck from '../components/BattleDeck'
// import UserPlay from '../components/UserPlay'
import Title from '../components/Title'
import Nav from '../components/Nav'
import DeckCard from '../components/DeckCard'
import YouPlay from '../components/YouPlay'
import Meter from '../components/Meter'
import BattleDeck from '../components/BattleDeck'
import UserPlay from '../components/UserPlay'






function Battle(){
    return (
        <div>
        <Nav />
        <Title />

<UserPlay />
<BattleDeck /> 

{/* <Meter /> */}

<YouPlay />

        </div>
        )
      }
export default Battle;
    