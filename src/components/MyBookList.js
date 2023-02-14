import React from "react";
import PickedBooks from "./PickedBooks";

function MyBookList({onBookReturn, clickedBooks, onRemoveMyBook}){

    return(
        <div>
            {clickedBooks.map((book)=>{
                return <PickedBooks key={book.id} onBookReturn={onBookReturn} book={book} onRemoveMyBook={onRemoveMyBook}/>
            })}
        </div>
    )
}

export default MyBookList;