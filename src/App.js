import './App.css';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom' 


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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
