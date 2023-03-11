import './Login.css'
import { Link, useHistory } from 'react-router-dom';

const SignUp = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/login')
    }
    return (  
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleClick}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>

                    <div className="form-group mt-3">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Jane Doe"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email Address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Username"
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
                        <button type="submit" className="btn btn-primary">
                            Sign Up 
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        Already have an account? <Link to='/Login'><a href="#">Login</a></Link>
                    </p>
                </div>
            </form>
        </div>
    );
}
 
export default SignUp;