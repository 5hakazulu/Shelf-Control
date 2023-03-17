import "./SignUp.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/sign-up", inputs);
      console.log(res);
    } catch (err) {
      setError(err.response.data);
    }
  };

  const history = useHistory();
  const handleClick = () => {
    history.push("/login");
  };
  return (
    <div className="Auth-form-container-sign-up">
      <form className="Auth-form-sign-up" onSubmit={handleClick}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>

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
              placeholder="Email Address"
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
            {err && <p>{err}</p>}
          </div>
          <p className="text-center mt-2">
            Already have an account? <Link to="/Login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
