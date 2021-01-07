import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// components 
import NavBar from './Components/NavBar'

// pages
import Profile from './Pages/Profile'
import ProfileMe from './Pages/ProfileMe'
import Search from './Pages/Search'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Router>
        <Switch>
          <Route exact path="/profile/me" component={ProfileMe} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
