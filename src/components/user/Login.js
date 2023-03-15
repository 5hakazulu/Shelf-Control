import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import './Login.css'
import logo from '../../assets/SHELF_CONTROL_LOGO_LONG.png'
import cover from '../../assets/Books_Login.jpg'
const Login = () => {

    const history = useHistory();


    const handleClick = () => {
        history.push('/home')
    }

    return (
        <div id="container">
            <div id="cover-container">
                <img src={cover}></img>
            </div>
            <div id="main-container">    
                <img id="logo" src={logo}></img>
            </div>
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Login</h3>
                        
                        <div className="form-group mt-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Password"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button onClick={handleClick } type="submit" className="btn btn-primary">
                                Log In
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            Don't have an account? <Link to='/sign-up'><a href="#">Sign Up</a></Link>
                        </p>
                    </div>
                </form>
            </div>
            
        </div>
    )
}
 
export default Login;

