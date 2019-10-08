import React, { Component } from 'react'
import BattleReady from '../components/BattleReady'
import Nav from '../components/Nav'


import { FirebaseContext } from '../components/Firebase';

const Users = () => (
    <div>
        <Nav />
        <FirebaseContext.Consumer>
            {firebase => <BattleReady firebase={firebase} />}
        </FirebaseContext.Consumer>
    </div>
);

export default Users;