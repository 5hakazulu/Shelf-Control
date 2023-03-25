import { useState, useEffect } from "react";
import Moment from "react-moment";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { getSavedBooks } from "../api/api"; 

const SavedBooks = () => {
  const [books, setBooks] = useState([]);
  const userId = 1; 
  const moment = require("moment");

  useEffect(() => {
    const fetchSavedBooks = async () => {
      const { unreadBooks, readBooks } = await getSavedBooks(userId);
      setBooks([...unreadBooks, ...readBooks]);
    };

    fetchSavedBooks();
  }, [userId]);

  const renderBook = (book) => (
    <div key={book.id} className="saved-book">
      <img src={book.cover_photo} alt={book.title} />
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>
      <p>{moment(book.date_published).format("YYYY")}</p>
      <p>Avg. rating: {book.rating}</p>
      {book.link_to_buy && (
        <a target="_blank" rel="noopener noreferrer" href={book.link_to_buy}>
          Buy
        </a>
      )}
    </div>
  );

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
                <div id="saved-books">{books.filter((book) => !book.is_read).map(renderBook)}</div>
              </Tab.Pane>
              <Tab.Pane eventKey="read" id="read">
                <div id="saved-books">{books.filter((book) => book.is_read).map(renderBook)}</div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default SavedBooks;
