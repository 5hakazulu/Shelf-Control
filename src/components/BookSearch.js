import { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import './BookSearch.css';

const BookSearch = () => {
    const [books, setBooks] = useState([])
    const searchString = 'It ends with us';
    const getBook = async () => {
        await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchString)}}`)
            .then(response => response.json())
            .then(data => setBooks(data.items))
        
    }

    useEffect(() => {
        getBook()
    }, [])

    console.log(books)
    return ( 
        <div id="books-container">
            {books ? books.map((book, index) =>
                <div key={index} className="book">
                    <Dropdown className="book-dropdown">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Add
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Unread</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Read</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.thumbnail} /> : <img src="https://cdn.bookauthority.org/dist/images/book-cover-not-available.6b5a104fa66be4eec4fd16aebd34fe04.png" />}
                    <h1><a>{book.volumeInfo.title}</a></h1>
                    <h2>by {book.volumeInfo.authors[0]}</h2>
                </div>
            ) : null}
        </div>
        
     );
}
 
export default BookSearch;