import { useState } from "react"
const UnreadBooks = () => {
    const [unreadBooks, setUnreadBooks] = useState([])
    const getUnreadBooks = async () => {
        await fetch(`https://www.googleapis.com/books/v1/volumes?q=addie`)
            .then(response => response.json())
            .then(data => console.log(data))

    }

    useEffect(() => {
        getUnreadBooks()
    }, [])

    return (
        <div>

        </div>
    );
}

export default UnreadBooks;