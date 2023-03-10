import { Container, Col, Row } from 'react-bootstrap';
import barcode from '../../assets/barcode.png';
import logo from '../../assets/logo.jpeg'
import './Login.css';

const Login = () => {
    return (
        <div id='container'>
            <Container>
                <Row>
                    <header>Shelfcontrol</header>
                </Row>



                <Row>
                    <Col lg={4}>
                        <img id='logo' src={logo}></img>
                    </Col>
                    <Col lg={8}>

                        <form>
                            <input type="text" placeholder='Username' ></input>
                            <input type="password" placeholder='Password' ></input>
                            <button type='submit'>Submit</button>
                            <p>Do you have Shelfcontrol?</p>
                            <img id='barcode' src={barcode}></img>
                        </form>
                    </Col>
                </Row>

            </Container>

        </div>


    );
}

export default Login;