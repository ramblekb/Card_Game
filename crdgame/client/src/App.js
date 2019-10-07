import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
// import Nav from './components/Nav';
// import Login from './pages/Login';
import Deck from './pages/Deck';
import Battle from './pages/Battle';
import Home from './pages/Home';



function App() {
  return (
    <Router>
    <div>
    
    <Switch>
    <Route exact path="/" component={Deck} />
    {/* <Route exact path="/login" component={Login} /> */}
    <Route exact path="/deck" component={Deck} />

    <Route exact path="/battle" component={Battle} />

    <Route exact path="/home" component={Home} />





    </Switch>
      
    </div>
    </Router>
  );
}

export default App;