import React from "react";
import PickedBooks from "./PickedBooks";

function MyBookList({onBookReturn, clickedBooks, onRemoveMyBook}){

    return(
        <div>
            <h2><u>You have</u> {clickedBooks.length} <u>books checked out</u></h2>
            <h4>(To return a book back to the collection, simply click on the book)</h4>
            {clickedBooks.map((book)=>{
                return <PickedBooks key={book.id} onBookReturn={onBookReturn} book={book} onRemoveMyBook={onRemoveMyBook}/>
            })}
        </div>
    )
}

export default MyBookList;