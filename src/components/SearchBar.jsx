import React, { useEffect, useState } from "react";
import '../App';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isTyping, setIsTyping] = useState(false); // To track if user has started typing

  // Fetch books data once when the component is mounted
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("https://example-data.draftbit.com/books?_limit=100");
      const data = await response.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredBooks([]);
      setIsTyping(false); // Set isTyping to false when no text is entered
    } else {
      setIsTyping(true); // Set isTyping to true when the user is typing

      const lowercasedSearchTerm = searchTerm.toLowerCase();
      const filtered = books.filter(
        (book) =>
          book.title.toLowerCase().includes(lowercasedSearchTerm) ||
          book.authors.toLowerCase().includes(lowercasedSearchTerm)
      );
      setFilteredBooks(filtered);
    }
  }, [searchTerm, books]);

  return (
    <div>
      <h3 className="need">Looking for a Great Read? Find the Best Deal Below</h3>
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update the search term as user types
      />

      <div className="book-search">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="bookSearch-item">
              <img src={book.image_url} alt={book.title} />
              <h2>{book.title}</h2>
            </div>
          ))
        ) : (
          // Show this message only after typing and if no results match
          isTyping && <p>No results found. Try a different search.</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;