import React, { useState } from "react";
import PickedBooks from "./PickedBooks";
import Filter from "./Filter";
import Sort from "./Sort";

function MyBookList({onBookReturn, clickedBooks, onRemoveMyBook}){

    const [filteredTitles, setFilteredTitles] = useState('')

    function filterTitles(input){
        setFilteredTitles(input)
      }
      
      const booksToShow = clickedBooks.filter((book)=>{
        return ((book.title).toLowerCase()).match(filteredTitles.toLowerCase());
      })

      function handleSetSortBy(selection){
        console.log(selection)
      }

    return(
        <div>
            <h2><u>You have</u> {clickedBooks.length} <u>books checked out</u></h2>
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