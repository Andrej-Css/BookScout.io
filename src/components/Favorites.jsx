import React from "react"; 
import '../App'; // Css file 
import { UseAppContext } from "./context/appContext";
import FavoriteButton from "./FavoriteButton"; 

const Favorites = () => {
    const {favorites} = UseAppContext(); 
    console.log(favorites); 
    return (
        <div>
            <h1>Here are your favorite books </h1>
            {favorites.length > 0 ? (
            favorites.map(book => (
                <div key={book.id}>
                    <div><img src={book.image_url}></img></div>
                    <div><h2>{book.title}</h2></div>
                    <FavoriteButton book = {book}/>
                </div>
            )) 
        ):( <h1> No favorites to display yet</h1>
        )}
        </div>
        // <ul>
        // {favorites.map(book =>
        //   book.favorite === true ? <li key={boook.id}>{book.name}</li> : null
        // )}
        // </ul>

    );
       
}

export default Favorites; 