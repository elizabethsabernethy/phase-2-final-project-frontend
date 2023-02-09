import React, { useEffect, useState } from "react";
import Book from "./Book";

function BookList({pickBook}){

    const[books, setBooks] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/books')
        .then((resp)=> resp.json())
        .then((books)=> setBooks(books))
    },[])

    function likeBook(updatedBook){
        const updatedBooks = books.map((book) => {
          if (book.id === updatedBook.id) {
            return updatedBook;
          } else {
            return book;
          }
        });
        setBooks(updatedBooks);
      }

    return(
        <div>
            {books.map((book)=>{
                return <Book key={book.id} book={book} likeBook={likeBook} pickBook={pickBook}/>
            })}
        </div>
    )
}

export default BookList;
