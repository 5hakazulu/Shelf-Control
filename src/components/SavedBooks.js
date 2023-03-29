import { useState, useEffect, useContext } from "react";
import moment from "react-moment";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { getSavedBooks, addBookToUnread, getUserId } from "../api/api";


const SavedBooks = () => {
  const [userId, setUserId] = useState(null);
  const [unreadBooks, setUnreadBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [book, setBook] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [books, setBooks] = useState([]);

  const fetchSavedBooks = async () => {
    if (!userId) return;

    try {
      const { unreadBooks, readBooks } = await getSavedBooks(userId);
      setUnreadBooks(unreadBooks);
      setReadBooks(readBooks);
    } catch (error) {
      console.error('Error fetching saved books:', error);
    }
  };



  useEffect(() => {
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

  const handleClick = (book) => {
    setBook(book);
  };

  const handleAddBook = async () => {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const url = `/api/books/${currentUser._id}/unread`;
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(book),
    });
    const data = await response.json();
    setBooks(data);
    setBook(null);
  };



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
    {unreadBooks.map((book) => renderBook(book))}
    {book && (
      <button onClick={() => handleAddBook(book)}>Add Book</button>
    )}
  </div>
</Tab.Pane>
<Tab.Pane eventKey="read" id="read">
  <div id="saved-books">
    {readBooks.map((book) => renderBook(book))}
  </div>
</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default SavedBooks;
