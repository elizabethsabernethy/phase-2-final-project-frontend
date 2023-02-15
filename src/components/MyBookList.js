import React, { useState } from "react";
import PickedBooks from "./PickedBooks";
import Filter from "./Filter";
import Sort from "./Sort";

function MyBookList({onBookReturn, books, onRemoveMyBook}){

  const [filteredTitles, setFilteredTitles] = useState('')
  const [sortBy, setSortBy] = useState('Sort Books')

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
            <h2><u>You have</u> {books.length} <u>books checked out</u></h2>
            <h4>(To return a book back to the collection, simply click on the book)</h4>
            <div className='filter-sort'>
            <div className='filter'><Filter filterTitles={filterTitles}/></div>
            <div className='sort'><Sort handleSetSortBy={handleSetSortBy}/></div>
          </div>
            {booksToShow.map((book)=>{
                return <PickedBooks key={book.id} onBookReturn={onBookReturn} book={book} onRemoveMyBook={onRemoveMyBook}/>
            })}
        </div>
    )
}

export default MyBookList;