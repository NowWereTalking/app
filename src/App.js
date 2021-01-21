import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


// components 
import NavBar from './Components/NavBar/NavBar'
import Profile from './Pages/Profile/Profile'
import Landing from './Pages/Landing/Landing'
import User from './Pages/User/User'
// import Debate from "./Pages/Debate";

function App() {
  return (
    <div className="App">
      
      <Router>
      <NavBar /> 
        <Switch>
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/Landing" component={Landing} />
          <Route exact path="/User" component={User} />
          {/* <Route exact path="/Debate" component={Debate} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
