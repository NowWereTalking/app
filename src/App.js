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
import Profile from './Pages/Profile/Profile'
import Landing from './Pages/Landing/Landing'
import User from './Pages/User/User'
import Header from './Components/Header'
// import Debate from "./Pages/Debate";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header/>
      {/* <NavBar />  */}
        <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/user" component={User} />
          {/* <Route exact path="/Debate" component={Debate} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
