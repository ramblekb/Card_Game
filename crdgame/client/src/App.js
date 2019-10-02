import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import images from './images'; // array of image objects
import './App.css'; // default styling
import Card from './components/Cards'; // sends images to DOM
import Nav from './components/Nav'; //
import Battle from './components/Battle'; //
import Navv from './components/Navv'; //
import Login from './components/Login'; //
import Deck from './components/Deck'; //



// class App extends Component {

    function App() {
          return (
            <Router>
              <div>
                <Navv />
                <Switch>
                  <Route exact path="/" component={Deck} />
                  <Route exact path="/login" component={Login} />
                  {/* <Route exact path="/register" component={Register} /> */}
        
                  <Route exact path="/card" component={Card} />
                  <Route exact path="/deck" component={Deck} />
                  {/* <Route exact path="/indexa" component={Indexa} /> */}
                  {/* <Route exact path="/logo" component={Logo} /> */}
                  <Route exact path="/battle" component={Battle} />
        
        </Switch>
              </div>
            </Router>
          );
        }

    
    
  

export default App;