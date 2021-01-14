
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route,} from "react-router-dom";


// components 
import NavBar from './Components/NavBar'

// pages
import Profile from './Pages/Profile'
import Users from './Pages/Users'
// import SignIn from './Pages/SignIn'


import Landing from './Pages/Landing'
import Debate from "./Pages/Debate";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar /> 
      
        
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/debate" component={Debate}/>   
          <Route exact path="/" component={Landing} />
          
        
      
     </div>
    </Router>
  );
}

export default App;
