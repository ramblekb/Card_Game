import React from 'react'
import Nav from '../components/Nav'
import DeckCard from '../components/DeckCard'
import PickedDeck from '../components/PickedDeck'

import YourTurn from '../components/YourTurn'
import Meter from '../components/Meter'
import BattleDeck from '../components/BattleDeck'
import EnemyCard from '../components/EnemyCard'
import VerticalSlider from '../components/VerticalSlider'
import VertIcon from '../components/VertIcon'
import Verse from '../components/Verse'







function Battle(){
    return (
        <div>
        <Nav />

<VertIcon />
<EnemyCard>
</EnemyCard>

<BattleDeck />

<div>

<YourTurn>
<VerticalSlider />
</YourTurn>

</div>




<Verse />

</div>

  
        )
      }
export default Battle;
    