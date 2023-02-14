import React, {useState} from "react";

function PickedBooks({onBookReturn, clickedBooks, onRemoveMyBook}){

    const[hideDetails, setHideDetails] = useState(true)

    function hoverBook(){
        setHideDetails((hideDetails) => !hideDetails)
    }

    function returnBook(book){
        fetch('http://localhost:3000/books',{
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        "title" : book.title,
        "author": book.author,
        "summary": book.summary,
        "themes": book.themes,
        "likes": book.likes,
        "year": book.year
        }),
      })
        .then((resp) => resp.json())
        .then((book)=> onBookReturn(book))
      }

      function removeFromMyBooks(theBook){
        fetch(`http://localhost:3000/myBooks/${theBook.id}`,{
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
          }
        })
          .then((resp) => resp.json())
          .then(()=> onRemoveMyBook(theBook))
        }
    
    function clickBook(book){
        returnBook(book)
        removeFromMyBooks(book)
    }

    return(
        <div >
            {clickedBooks.map((book)=>{
                return (
                    <div className="book" key={book.id} onClick={()=>{clickBook(book)}}>
                    <div className="book-cover" hidden={!hideDetails} onMouseEnter={hoverBook}>
                        <h2 className="title">{book.title}</h2>
                        <h3 className="author">{book.author}</h3>
                        <h3 className="year">{book.year}</h3> 
                    </div>
                    <div className="open-book"  onMouseLeave={hoverBook}  hidden={hideDetails}>
                        <p className="summary">{book.summary}</p>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PickedBooks;
