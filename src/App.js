
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route,} from "react-router-dom";


// components 
import NavBar from './Components/NavBar'

// pages
import Profile from './Pages/Profile'
import Users from './Pages/Users'
import SignIn from './Pages/SignIn'
import ProfileMe from './Pages/ProfileMe'
import Search from './Pages/Search'
import Landing from './Pages/Landing'
import SignUp from './Pages/SignUp'

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar /> 
      
        
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/" component={SignIn} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={SignUp} />
        
      
     </div>
    </Router>
  );
}

export default App;
