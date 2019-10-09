import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Deck from './pages/Deck';
import Users from './pages/Users';
import Battle from './pages/Battle';
import Home from './pages/Home';




function App() {
  return (
    <Router>
    <div>
    
    <Switch>
    <Route exact path="/" component={Users} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />

    <Route exact path="/deck" component={Deck} />

    <Route exact path="/battle" component={Battle} />

    <Route exact path="/home" component={Home} />
    {/* <Route exact path="/griddy" component={Griddy} />
    <Route exact path="/verseP" component={VerseP} />
    <Route exact path="/fight" component={Fight} /> */}







    </Switch>
      
    </div>
    </Router>
  );
}

export default App;