import React from 'react'
// import BattleDeck from '../components/BattleDeck'
// import UserPlay from '../components/UserPlay'
import Title from '../components/Title'
import Nav from '../components/Nav'
import DeckCard from '../components/DeckCard'
import CustomizedSlider from '../components/CustomizedSlider'
import PickedDeck from '../components/PickedDeck'

import YouPlay from '../components/YouPlay'
import Meter from '../components/Meter'
import BattleDeck from '../components/BattleDeck'
import UserPlay from '../components/UserPlay'
import VerticalSlider from '../components/VerticalSlider'
import VertIcon from '../components/VertIcon'






function Battle(){
    return (
        <div>
        <Nav />
        <Title />



<VertIcon />
<UserPlay>
<CustomizedSlider />
</UserPlay>


<div>
<BattleDeck>

<Meter />
</BattleDeck>

</div>



<div>


<YouPlay>


<VerticalSlider />



</YouPlay>
</div>

        </div>
        )
      }
export default Battle;
    