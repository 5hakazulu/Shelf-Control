
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../context/authContext";
import { useContext } from "react";


const SignUp = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  // const headers = {
  //   'PRIVATE-KEY': '{{00acdbba-5deb-4b88-a589-b427dd87a623}}',

  // };


  const [err, setError] = useState(null);
  const history = useHistory();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // var data = {
    //   "username": inputs.username,
    //   "secret": inputs.password,

    // }
    // console.log(data)
    try {

      
      // const chat = await axios.post('https://api.chatengine.io/users/', data, { headers });
      // console.log(chat);
      const response = await axios.post("http://localhost:8800/api/auth/sign-up", inputs);
      const { token } = response.data;
      login(token);
      history.push("/home");

    } catch (err) {
      setError(err.response.data);
    }
  };
  


  return (
    <div className="Auth-form-container-sign-up">

      <form className="Auth-form-sign-up">
        <div className="Auth-form-content-sign-up">
          <h3 className="Auth-form-title-sign-up">Sign Up</h3>


          <div className="form-group mt-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g jane_doe@email.com"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="username"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Sign Up
            </button>
            {err && <p>{err.message}</p>}
          </div>
          <p className="text-center mt-2">
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </form>

    </div>

  );
};

export default SignUp;
