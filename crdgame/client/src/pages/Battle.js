import React from 'react'
import Nav from '../components/Nav'
// import DeckCard from '../components/DeckCard'
// import PickedDeck from '../components/PickedDeck'
// import YourTurn from '../components/YourTurn'
// import Meter from '../components/Meter'
import BattleDeck from '../components/BattleDeck'
// import EnemyCard from '../components/EnemyCard'
// import VerticalSlider from '../components/VerticalSlider'
// import VertIcon from '../components/VertIcon'
// import Verse from '../components/Verse'
import { FirebaseContext } from '../components/Firebase';

function Battle() {
  return (
    <div>
      <Nav />
      <FirebaseContext.Consumer>
            {firebase => <BattleDeck firebase={firebase} />}
        </FirebaseContext.Consumer>
    </div>
  )
}
export default Battle;
