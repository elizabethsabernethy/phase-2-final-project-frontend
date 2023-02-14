import React from "react";
import Book from "./Book";
import Filter from "./Filter";

function BookList({books, setBooks, onPickBook, onRemoveBook}){

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
          <h2><u>There are</u> {books.length} <u>books available to be checked out</u></h2>
          <h4>To check a book out, simply click on the book</h4>
          <h4>To like a book, hit the heart button below the book</h4>
          <Filter />
            {books.map((book)=>{
                return <Book key={book.id} book={book} likeBook={likeBook} onPickBook={onPickBook} onRemoveBook={onRemoveBook}/>
            })}
        </div>
    )
}

export default BookList;
