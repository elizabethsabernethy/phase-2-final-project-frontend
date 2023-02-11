import React from "react";
import Book from "./Book";

function BookList({books, setBooks, pickBook, removeFromCollection}){

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
                return <Book key={book.id} book={book} likeBook={likeBook} pickBook={pickBook} removeFromCollection={removeFromCollection}/>
            })}
        </div>
    )
}

export default BookList;
