import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
<<<<<<< HEAD
import Signup from './pages/Signup';
import Login from './pages/Login';
import Deck from './pages/Deck';
import Users from './pages/Users';
import Battle from './pages/Battle';
import Home from './pages/Home';


=======
// import Nav from './components/Nav';
import Login from './components/Login';
import Deck from './pages/Deck';
import Battle from './pages/Users';
import Signup from "./components/Sign-up"
>>>>>>> ac75f8d041b3c1c0d8080f2188a6747e28d6162c


function App() {
  return (
    <Router>
    <div>
    
    <Switch>
<<<<<<< HEAD
    <Route exact path="/" component={Users} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />

=======
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/" component={Login} />
    {/* <Route exact path="/login" component={Login} /> */}
>>>>>>> ac75f8d041b3c1c0d8080f2188a6747e28d6162c
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