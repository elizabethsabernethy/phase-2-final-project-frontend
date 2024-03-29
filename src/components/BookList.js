import React, { useContext, useState } from "react";
import Book from "./Book";
import Filter from "./Filter";
import Sort from "./Sort";
import { BookContext } from "../context/BookContext";

function BookList({onPickBook, onRemoveBook}){

  const {books, setBooks} = useContext(BookContext);

  const [filteredTitles, setFilteredTitles] = useState('')
  const [sortBy, setSortBy] = useState('Sort Books')

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

      function handleSetSortBy(selection){
        setSortBy(selection)
      }
    
      const sortedBooks = books.sort((a,b)=> { 
        if(sortBy === 'A-Z'){
          return a.title.localeCompare(b.title)
        }
        else if(sortBy === 'Z-A'){
          return b.title.localeCompare(a.title)
        }
        else if(sortBy === 'newest'){
          return b.year - a.year
        }
        else if(sortBy === 'oldest'){
          return a.year - b.year
        }
        return books;
      });

      const booksToShow = sortedBooks.filter((book)=>{
            return ((book.title).toLowerCase()).match(filteredTitles.toLowerCase());
      })

    return(
        <div>
          <h2><u>There are</u> {books.length} <u>books available to be checked out</u></h2>
          <h4>(To check a book out, simply click on the book. To like a book, hit the heart button below the book)</h4>
          <div className='filter-sort'>
            <div className='filter'><Filter filterTitles={filterTitles}/></div>
            <div className='sort'><Sort handleSetSortBy={handleSetSortBy}/></div>
          </div>
            {booksToShow.map((book)=>{
                return <Book key={book.id} book={book} likeBook={likeBook} onPickBook={onPickBook} onRemoveBook={onRemoveBook}/>
            })}
        </div>
    )
}

export default BookList;
