import { Container, Col, Row, Navbar, Button, Form, Nav, NavDropdown } from 'react-bootstrap';
import "./navbar.css"
import logo from '../assets/SHELF_CONTROL_LOGO_LONG.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBookOpen, faBook, faComment } from '@fortawesome/free-solid-svg-icons';


function SControlNavbar() {
    return (
        <Navbar className='nav-bar'>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo}
                        className="d-inline-block align-top nav-bar-logo"
                        alt="Shelf Control Logo"
                    />
                </Navbar.Brand>
                <Navbar.Collapse id="navbarScroll">

                    <Form className="d-flex search-bar">
                        <Form.Control
                            type="search"
                            placeholder="Find A Book"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-secondary" className='search-btn' >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Button>
                    </Form>

                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll

                    >

                        <Nav.Link className='nav-link' href="/read"><FontAwesomeIcon className='mx-2' icon={faBookOpen} />My Library</Nav.Link>
                        <Nav.Link href="/unread"> <FontAwesomeIcon className='mx-2' icon={faBook} />Want to Read</Nav.Link>

                        <Nav.Link href="/bookclub"> <FontAwesomeIcon className='mx-2' icon={faComment} />Book Club</Nav.Link>

                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>

    )

}

export default SControlNavbar;