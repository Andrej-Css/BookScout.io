import React from "react";
import '../App.css';  // CSS file
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="App-Wrapper">
            {/* Navbar */}
            <div className="Nav-Bar-Wrapper">
                <div className="bookListLink">
                    <Link to="/BookList">Go back to Booklist</Link>
                </div>
                <div className="searchBar">Search...</div>
                <div className="favoritesLink">
                    <Link to="/favorites">Your Favorites</Link>
                </div>
                <div className="comparePrices">
                    Compare Prices
                </div>
            </div>
        </div>
    );
}

export default NavBar;