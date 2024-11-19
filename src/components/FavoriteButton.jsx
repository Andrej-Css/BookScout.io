import React from "react";
import { UseAppContext } from "./context/appContext";

const FavoriteButton = ({book})=> {
    //<button onClick={handleClick}> Add to Favorites </button>);
    const {favorites, AddToFavorites, RemoveFromFavorites} = UseAppContext();  
    const isFavorite = favorites.some(fav=>fav.id===book.id); 
    const handleClick = () => { 
       if (isFavorite){
        RemoveFromFavorites(book.id);
       } else {
        AddToFavorites(book);
       }
       console.log("button clicked");
    };
    return isFavorite? (
        <button onClick={handleClick}>Remove Fav</button>
    ): (
        <button onClick={handleClick}>Add Favs</button>
    );
};
export default FavoriteButton;