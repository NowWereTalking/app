import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// components 
import Header from './Components/Header'
import NavBar from './Components/NavBar'

// pages
import Profile from './Pages/Profile'
import ProfileMe from './Pages/ProfileMe'
import Search from './Pages/Search'
import Landing from './Pages/Landing'
import SignUp from './Pages/SignUp'

function App() {
  return (
    <div className="App">
       <Header/>
      <Router>
        <Switch>
          <Route exact path="/profile/me" component={ProfileMe} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
