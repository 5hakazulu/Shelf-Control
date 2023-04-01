import { useContext } from "react";
import SControlNavbar from "./components/navbar";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import BookSearch from "./components/BookSearch";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SControlBookClub from "./components/BookClub";
import { AuthContext } from "./context/authContext";

import Home from "./pages/Home";

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <Router>
      <div className="App">
        {!currentUser ? (
          <Switch>
            <Route exact path="/">
              <Login />
              <Footer />
            </Route>
            <Route path="/sign-up">
              <SignUp />
              <Footer />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/bookClub">
              <SControlNavbar />
              <SControlBookClub />
              <Footer />
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
