import { Container, Row, Col, Navbar, Button, Form, Nav } from 'react-bootstrap';
import "./navbar.css";
import logo from '../assets/SHELF_CONTROL_LOGO_LONG.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMagnifyingGlass, faBookOpen, faComment } from '@fortawesome/free-solid-svg-icons';


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
        setSearch('')
    }

    console.log(search)
    return (
        <>
            <Navbar expand='lg' className='nav-bar d-inline-block'>
                <Container className='no-gutters'>
                    <Navbar.Brand style={{ maxWidth: '70%' }} className=''>
                        <img src={logo}
                            className=" align-top nav-bar-logo "
                            alt="Shelf Control Logo"
                        />
                    </Navbar.Brand>




                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Form className="d-flex search-bar py-2 mx-2" onSubmit={e => handleSubmit(e)}>
                            <Form.Control
                                type="search"
                                placeholder="Find A Book"
                                className="me-2"
                                aria-label="Search"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                            />
                            <Button variant="outline-secondary" className='search-btn' >
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </Button>
                        </Form>

                        <Nav
                            className="ms-auto my-2 my-lg-0 gt-0"
                            style={{ maxHeight: '100px' }}
                        // navbarScroll

                        >


                            <Nav.Link style={{ minWidth: '150px', maxHeight: '50px' }} className='nav-link  border border-2 mx-2 rounded border-secondary my-2 mx-2' href="/home"><FontAwesomeIcon className='mx-2' icon={faBookOpen} />My Library</Nav.Link>


                            <Nav.Link style={{ minWidth: '150px', maxHeight: '50px' }} className='nav-link border mx-2 border-2 rounded border-secondary my-2 mx-2' href="/bookclub"> <FontAwesomeIcon className='mx-2' icon={faComment} />Book Club</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>

                </Container>

            </Navbar>

        </>
    )

}

export default SControlNavbar;