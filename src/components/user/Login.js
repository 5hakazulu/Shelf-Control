import Container from 'react-bootstrap/Container';
import barcode from '../../assets/barcode.png';
import logo from '../../assets/logo.jpeg'
import './Login.css';

const Login = () => {
    return (
        <div id='container'>
            <header>Shelfcontrol</header>
            <div className='main'>
                <img id='logo' src={logo}></img>
                <form>
                    <input type="text" placeholder='Username' ></input>
                    <input type="password" placeholder='Password' ></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <p>Do you have Shelfcontrol?</p>
            <img id='barcode' src={barcode}></img>

        </div>
    );
}

export default Login;