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
import Search from './Pages/Search'
import Landing from './Pages/Landing'


function App() {
    return (
      <div className="App">
         <Header/>
         <NavBar/>
        <Router>
          <Switch>
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </Router>
        
      </div>
    );
  }

export default App;
