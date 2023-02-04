import React, { useEffect, useState } from "react";
import Book from "./Book";

function BookList({chooseBook}){

    const[books, setBooks] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/books')
        .then((resp)=> resp.json())
        .then((books)=> setBooks(books))
    },[])

    return(
        <div>
            {books.map((book)=>{
                return <Book key={book.id} chooseBook={chooseBook} book={book}/>
            })}
        </div>
    )
}

export default BookList;
