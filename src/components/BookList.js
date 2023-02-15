import React, { useState } from "react";
import Book from "./Book";
import Filter from "./Filter";
import Sort from "./Sort";

function BookList({books, setBooks, onPickBook, onRemoveBook}){

  const [filteredTitles, setFilteredTitles] = useState('')

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

      function filterTitles(input){
        setFilteredTitles(input)
      }
      
      const booksToShow = books.filter((book)=>{
        return ((book.title).toLowerCase()).match(filteredTitles.toLowerCase());
      })

      function handleSetSortBy(selection){
        console.log(selection)
      }

    return(
        <div>
          <h2><u>There are</u> {books.length} <u>books available to be checked out</u></h2>
          <h4>To check a book out, simply click on the book</h4>
          <h4>To like a book, hit the heart button below the book</h4>
          <div id='filter-sort'>
              <Filter filterTitles={filterTitles}/> 
              <Sort handleSetSortBy={handleSetSortBy}/>
          </div>
            {booksToShow.map((book)=>{
                return <Book key={book.id} book={book} likeBook={likeBook} onPickBook={onPickBook} onRemoveBook={onRemoveBook}/>
            })}
        </div>
    )
}

export default BookList;
