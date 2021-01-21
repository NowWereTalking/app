import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// components 
import NavBar from './Components/NavBar/NavBar'
import Profile from './Pages/Profile'
import Landing from './Pages/Landing'
import User from './Pages/User'
import Debate from "./Pages/Debate";

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Router>
        <Switch>
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/Landing" component={Landing} />
          <Route exact path="/User" component={User} />
          <Route exact path="/Debate" component={Debate} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
