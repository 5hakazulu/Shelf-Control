import { useState, useEffect } from "react";
import Moment from "react-moment";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab'; const SavedBooks = () => {
    const moment = require('moment');
    return (
        <div id="saved-books-container">
            <Tab.Container id="left-tabs-example" defaultActiveKey="unread">
            <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="unread">Want to Read</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="read">Read</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={10}>
                    <Tab.Content>
                        <Tab.Pane eventKey="unread" id="unread">
                            <div id="saved-books">
                                <div className="saved-book">
                                    <img src="http://books.google.com/books/content?id=vH3LDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
                                    <h1>The Invisible Life of Addie LaRue</h1>
                                    <h2>V. E. Schwab</h2>
                                    <p>{moment('2020-10-06').format('YYYY')}</p>
                                    <p>Avg. rating: 5</p>
                                    <a target='_blank' href="https://play.google.com/store/books/details?id=vH3LDwAAQBAJ&rdid=book-vH3LDwAAQBAJ&rdot=1&source=gbs_api">Buy</a>
                                </div> 
                            </div>  
                        </Tab.Pane>
                            <Tab.Pane eventKey="read" id="read">
                                <div id="saved-books">
                                    <div className="saved-book">
                                        <img src="http://books.google.com/books/content?id=vH3LDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
                                        <h1>testing</h1>
                                        <h2>V. E. Schwab</h2>
                                        <p>{moment('2020-10-06').format('YYYY')}</p>
                                        <p>Avg. rating: 5</p>
                                        <a target='_blank' href="https://play.google.com/store/books/details?id=vH3LDwAAQBAJ&rdid=book-vH3LDwAAQBAJ&rdot=1&source=gbs_api">Buy</a>
                                    </div> 
                                </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
        </div>
    );
}

    export default SavedBooks;

 
