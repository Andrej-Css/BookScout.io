import React from "react"; 
import '../App'; // Css file 
import { UseAppContext } from "./context/appContext";
import FavoriteButton from "./FavoriteButton"; 

const Favorites = () => {
    const {favorites} = UseAppContext(); 
    console.log(favorites); 
    return (
        <div className="Wrapper-for-Fvs">
            {/* <h1 className="favorite-book">Favorite Books:</h1> */}
            {favorites.length > 0 ? (
            favorites.map(book => (
                <div className="fav-wrap" key={book.id}>
                    <div className="display-favBook"><img src={book.image_url}></img></div>
                    <span className="display-favBook"><h3>{book.title}, {book.authors}</h3></span>
                    {/* <div className="display-favBook"><h3>{book.authors}</h3></div> */}

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