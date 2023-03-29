import { useState, useEffect, useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import "./BookSearch.css";
import { AuthContext } from "../context/authContext";

const BookSearch = ({ userId }) => {
  const { currentUser } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const searchString = useSelector((state) => state.keyword.searchString);

  // get books from search string
  const getBook = async () => {
    if (searchString) {
      await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          searchString
        )}`
      )
        .then((response) => response.json())
        .then((data) => setBooks(data.items))
        .catch((error) => console.log("Error fetching books: ", error));
    }
  };

  useEffect(() => {
    getBook();
  }, [searchString]);

  const saveUnread = async (event, book) => {
    event.preventDefault();
    const bookId = event.target.attributes[1].value;
    console.log("Selected book: ", book);
    console.log("UserId:", userId);

    if (!book) {
      console.log("No book selected");
      return;
    }

    if (!userId) {
      console.log("User ID not available yet");
      return;
    }

    // save info to the unread database
    await fetch(`/api/books/${userId}/unread`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors[0],
        rating: 0,
        cover_photo: book.volumeInfo.imageLinks.thumbnail,
        description: book.volumeInfo.description,
        date_published: book.volumeInfo.publishedDate,
        link_to_buy: book.volumeInfo.infoLink,
      }),
    });
  };

  const saveRead = async (event, book) => {
    const bookId = event.target.attributes[1].value;
    console.log("Selected book: ", book);
    console.log("UserId:", userId);

    if (!book) {
      console.log("No book selected");
      return;
    }

    if (!userId) {
      console.log("User ID not available yet");
      return;
    }

    // save info to the read database
    await fetch(`/api/books/${userId}/read`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors[0],
        rating: 0,
        cover_photo: book.volumeInfo.imageLinks.thumbnail,
        description: book.volumeInfo.description,
        date_published: book.volumeInfo.publishedDate,
        link_to_buy: book.volumeInfo.infoLink,
      }),
    });
  };

    return (
        <div id="books-container">
            {books ? books.map((book, index) =>
                <div key={index} className="book">
                    <Dropdown className="book-dropdown">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Add
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" id={book.id} onClick={(event) => saveUnread(event, book)}>Want to Read</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" id={book.id} onClick={(event) => saveRead(event, book)}>Read</Dropdown.Item>
  
                        </Dropdown.Menu>
                    </Dropdown>
                    {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.thumbnail} /> : <img src="https://cdn.bookauthority.org/dist/images/book-cover-not-available.6b5a104fa66be4eec4fd16aebd34fe04.png" />}
                    <h1><a>{book.volumeInfo.title}</a></h1>
                    <h2>by {book.volumeInfo.authors}</h2>
                </div>
            ) : null}
        </div>

    );
}

export default BookSearch;