import React from "react";
import SearchBar from "./SearchBar";

const SearchBook = () => {
    return (
        <div className="FirstPage-Wrapper">
            <div className="TextAndImageWrapper">
                <h1>Find. 
                    <span className="compare">Compare.</span> 
                    Collect.</h1>
                <img src="src/assets/best-price.png" alt="Best Price" />
            </div>
            <h3>
                Discover the best deals from top online booksellers, compare prices instantly, and save your favorite books   
                <span className="compare"> all in one place</span>.
            </h3>
            <div>
                <SearchBar />  {/* This should render the SearchBar */}
            </div>
        </div>
    );
}

export default SearchBook;