import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
// import Nav from './components/Nav';
import Login from './components/Login';
import Deck from './pages/Deck';
import Battle from './pages/Users';
import Signup from "./components/Sign-up"


function App() {
  return (
    <Router>
    <div>
    
    <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/" component={Login} />
    {/* <Route exact path="/login" component={Login} /> */}
    <Route exact path="/deck" component={Deck} />

    <Route exact path="/battle" component={Battle} />




    </Switch>
      
    </div>
    </Router>
  );
}

export default App;