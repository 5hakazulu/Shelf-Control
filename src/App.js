
import SControlNavbar from './components/navbar';
import './App.css';
import Login from './components/user/Login';
import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import SignUp from './components/user/SignUp';

function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
          <Route path='/read'>
            <SControlNavbar />

          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
