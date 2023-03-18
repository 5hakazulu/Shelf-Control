import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import "./Login.css";
import logo from "../assets/SHELF_CONTROL_LOGO_LONG.png";
import cover from "../assets/Books_Login.jpg";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";






const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const history = useHistory();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      history.push("/home");
    } catch (err) {
      setError(err.response.data);
    }
  };




  return (
    <div id="container">
      <div id="cover-container">
        <img src={cover} alt="cover"></img>
      </div>
      <div id="main-container">
        <img id="logo" alt="logo" src={logo}></img>
      </div>
      <div className="Auth-form-container-login">
        <form className="Auth-form-login">
          <div className="Auth-form-content-login">
            <h3 className="Auth-form-title-login">Login</h3>

            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary"
              >
                Log In
              </button>
              {err && <p>{err}</p>}
            </div>
            <p className="text-center mt-2">
              Don't have an account? <Link to="/sign-up">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
