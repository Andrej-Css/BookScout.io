import React, { useEffect, useState } from "react";
import '../App';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [personalBooks, setPersonalBooks] = useState([]); // Storing books from your personal API
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isTyping, setIsTyping] = useState(false); // To track if the user has started typing

  // Fetch books data once when the component is mounted
  useEffect(() => {
    const fetchBooks = async () => {
      // Fetch public book data
      const response = await fetch("https://example-data.draftbit.com/books?_limit=100");
      const data = await response.json();

      // Fetch your personal API data for price comparison
      const personalResponse = await fetch("/PersonalAPI.json"); 
      const personalApiData = await personalResponse.json();

      setBooks(data);
      setPersonalBooks(personalApiData);
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

      const allBooks = [...books];

      const filtered = allBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(lowercasedSearchTerm) ||
          book.authors.toLowerCase().includes(lowercasedSearchTerm)
      );

      // Add price information from the personal API
      const filteredWithPrices = filtered.map((book) => {
        const personalBook = personalBooks.find(
          (personalBook) => personalBook.title === book.title
        );
        if (personalBook) {
          return {
            ...book,
            prices: personalBook, // Add price details to the book object
          };
        }
        return book;
      });

      setFilteredBooks(filteredWithPrices);
    }
  }, [searchTerm, books, personalBooks]);

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
              <img src={book.image_url || "default-image.jpg"} alt={book.title} />
              <h2>{book.title}</h2>
              <p>Author: {book.authors || "Unknown"}</p>

              {/* Display prices from the personal API */}
              {book.prices ? (
                <div className="price-list">
                {book.prices.priceDiverta && <span className="store-price">Price at Diverta: {book.prices.priceDiverta} RON </span>}
                {book.prices.priceCarturesti && <span className="store-price">Price at Carturesti: {book.prices.priceCarturesti} RON </span>}
                {book.prices.priceLibrarum && <span className="store-price">Price at Librarum: {book.prices.priceLibrarum} RON </span>}
              </div>
              ) : (
                <p>No price info available</p>
              )}
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