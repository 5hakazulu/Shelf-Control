
import SControlNavbar from './components/navbar';
import './App.css';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"
import BookSearch from './components/BookSearch';
import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom' 
import Home from './pages/Home';

//APP
function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
