import SControlNavbar from './components/navbar';
import './App.css';
import Login from './components/user/Login';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <SControlNavbar />
      <Login />
    </div>
  );
}

export default App;
