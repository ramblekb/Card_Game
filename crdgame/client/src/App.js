import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Deck from './pages/Deck';
import Battle from './pages/Battle';
import Home from './pages/Home';
import Griddy from './pages/Griddy';
import VerseP from './pages/VerseP';



import Users from './pages/Users';


function App() {
  return (
    <Router>
    <div>
    
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />

    <Route exact path="/deck" component={Deck} />

    <Route exact path="/battle" component={Battle} />

    <Route exact path="/home" component={Home} />
    <Route exact path="/griddy" component={Griddy} />
    <Route exact path="/verseP" component={VerseP} />

    <Route exact path="/users" component={Users} />







    </Switch>
      
    </div>
    </Router>
  );
}

export default App;