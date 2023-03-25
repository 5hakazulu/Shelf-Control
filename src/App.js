
import SControlNavbar from './components/navbar';
import './App.css';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"
import BookSearch from './components/BookSearch';
import Footer from "./components/Footer";
import SControlBookClub from './components/BookClub';



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
            <Login />
            <Footer />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
            <Footer />
          </Route>
          <Route path='/bookClub'>
            <SControlNavbar />
            <SControlBookClub />
            <Footer />
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
