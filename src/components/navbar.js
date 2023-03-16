import { Container, Col, Row, Navbar, Button, Form, Nav, NavDropdown } from 'react-bootstrap';
import "./navbar.css";
import logo from '../assets/SHELF_CONTROL_LOGO_LONG.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import BookSearch from './BookSearch';
import { useDispatch } from 'react-redux';
import { setSearchString } from '../features/keywordSlice';


function SControlNavbar() {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchString(search));
    }

    console.log(search)
    return (
        <>
        <Navbar className='nav-bar'>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo}
                        className="d-inline-block align-top nav-bar-logo"
                        alt="Shelf Control Logo"
                    />
                </Navbar.Brand>
                <Navbar.Collapse id="navbarScroll">

                    <Form className="d-flex search-bar" onSubmit={e => handleSubmit(e)}>
                        <Form.Control
                            type="search"
                            placeholder="Find A Book"
                            className="me-2"
                            aria-label="Search"
                            onChange={(event) => setSearch(event.target.value)}
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
                        <Nav.Link className='nav-link' href="#action1">Read</Nav.Link>
                        <Nav.Link href="#action2">Unread</Nav.Link>

                        <Nav.Link href="#">Book Club</Nav.Link>

                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>
        </>
    )

}

export default SControlNavbar;