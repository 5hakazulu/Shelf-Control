export const getSavedBooks = async (userId) => {
    try {
      const response = await fetch(`/api/books/${userId}/saved`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching saved books:', error);
      return { unreadBooks: [], readBooks: [] };
    }
  };
  
  export const addBookToUnread = async (userId, book) => {
    try {
      const response = await fetch(`/api/books/${userId}/unread`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error adding book to unread list:', error);
    }
  };
  
  export const getUserId = async () => {
    try {
      const response = await fetch('/api/user');
      const data = await response.json();
      return data.userId;
    } catch (error) {
      console.error('Error fetching user ID:', error);
      return null;
    }
  };