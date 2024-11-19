import React from "react"; 
import '../App'; // Css file 
import { useState, useEffect } from "react";
import { API_url } from "./API";
import axios from 'axios';
import { UseAppContext } from "./context/appContext";
import FavoriteButton from "./FavoriteButton"; 

const BookList = () => {
    //creating the state 
    const [books, setBooks] = useState([]);

    const {favorites} = UseAppContext(); 

    useEffect(()=>{
        axios.get(API_url).then(res=>{
            console.log(res.data)
            setBooks(res.data)
        }).catch(err=>console.log(err))
    },[]);

  
    return (
        <div className='book-list'>
            {books.map(book => (
                <div className="individual-book" key={book.id}>
                    <div><img src={book.image_url}></img></div>
                    <div className="bookTitle"><h2>{book.title}</h2></div>
                    <div className="favoriteBook">
                    <FavoriteButton book = {book}/>
                    </div>
                </div>
            ))}
        </div>
    );
    
}

export default BookList; 