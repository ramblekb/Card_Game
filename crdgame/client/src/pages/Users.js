import React, { Component } from 'react'
import BattleReady from '../components/BattleReady'
import Title from '../components/Title'
import Nav from '../components/Nav'

import { FirebaseContext } from '../components/Firebase';

const Users = () => (
    <div>
        <Nav />
        <Title />
        <FirebaseContext.Consumer>
            {firebase => <BattleReady firebase={firebase} />}
        </FirebaseContext.Consumer>
    </div>
);

export default Users;