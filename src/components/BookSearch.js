import { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from "react-redux";
// import './BookSearch.css';

const BookSearch = () => {
    const [books, setBooks] = useState([]);
    const searchString = useSelector((state) => state.keyword.searchString);

    //get books from search string
    const getBook = async () => {
        if (searchString) {
            await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchString)}}`)
                .then(response => response.json())
                .then(data => setBooks(data.items))
        }
    }
console.log(books)
    useEffect(() => {
        getBook()
    }, [searchString])


    //save selected book to unread list
    const saveUnread = async (event) => {
        event.preventDefault();
        const bookId = event.target.attributes[1].value;
        await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
            .then(response => response.json())
            .then(data => console.log(data.volumeInfo))

        //save info to the unread database 
    }

    //save selected book to read list
    const saveRead = async (event) => {
        const bookId = event.target.attributes[1].value;
        await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
            .then(response => response.json())
            .then(data => console.log(data.volumeInfo))

        //save info to the read database 
    }

    return (
        <div id="books-container">
            {books ? books.map((book, index) =>
                <div key={index} className="book">
                    <Dropdown className="book-dropdown">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Add
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1" id={book.id} onClick={(event) => saveUnread(event)}>Want to Read</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" id={book.id} onClick={(event) => saveRead(event)}>Read</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.thumbnail} /> : <img src="https://cdn.bookauthority.org/dist/images/book-cover-not-available.6b5a104fa66be4eec4fd16aebd34fe04.png" />}
                    <h1>{book.volumeInfo.title}</h1>
                    <h2>by {book.volumeInfo.authors[0]}</h2>
                    {/* <p>{book.volumeInfo.description}</p> */}
                </div>
            ) : null}
        </div>

    );
}

export default BookSearch;