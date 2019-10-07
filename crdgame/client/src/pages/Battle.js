import React from 'react'
import Nav from '../components/Nav'
import DeckCard from '../components/DeckCard'
import PickedDeck from '../components/PickedDeck'

import YouPlay from '../components/YouPlay'
import Meter from '../components/Meter'
import BattleDeck from '../components/BattleDeck'
import EnemyCard from '../components/EnemyCard'
import VerticalSlider from '../components/VerticalSlider'
import VertIcon from '../components/VertIcon'






function Battle(){
    return (
        <div>
        <Nav />

<VertIcon />
<EnemyCard>
</EnemyCard>

<BattleDeck />

<div>

<YouPlay>
<VerticalSlider />
</YouPlay>

</div>
</div>

  
        )
      }
export default Battle;
    