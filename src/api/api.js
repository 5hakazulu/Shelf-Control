export const getSavedBooks = async (userId) => {
    try {
      const response = await fetch(`/api/books/${userId}/saved`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching saved books:', error);
    }
  };
  