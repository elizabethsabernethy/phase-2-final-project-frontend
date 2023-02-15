import React, { useState } from "react";

function Book({book, onPickBook, likeBook, onRemoveBook}){

    const[hideDetails, setHideDetails] = useState(true)
    const[liked, setLiked] = useState(false)

    function hoverBook(){
        setHideDetails((hideDetails) => !hideDetails)
    }

    function removeFromCollection(theBook){
      fetch(`http://localhost:3000/books/${theBook.id}`,{
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((resp) => resp.json())
      .then(()=> onRemoveBook(theBook))
    }

    function pickBook(book){
      fetch('http://localhost:3000/myBooks',{
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
          .then((myBook)=> onPickBook(myBook))
    }

    function clickBook(){
      alert(`You've added ${book.title} to 'My Books'`)
      pickBook(book)
      removeFromCollection(book)
    }

    function handleLikeBook(){
        if(!liked){
          setLiked(true)
        }
        else if(liked){
          setLiked(false)
        }
        patchLike()
    }

    function patchLike(){
      fetch(`http://localhost:3000/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: liked
      })
    })
      .then((resp) => resp.json())
      .then((updatedBook) => likeBook(updatedBook));
    }
    
    return(
        <div className="book">
            <div className="book-cover" hidden={!hideDetails} onMouseEnter={hoverBook}>
                <h2 className="title">{book.title}</h2>
                <h3 className="author">{book.author}</h3>
                <h3 className="year">{book.year}</h3> 
            </div>
            <div className="open-book"  onMouseLeave={hoverBook} onClick={clickBook} hidden={hideDetails}>
                <p className="summary">{book.summary}</p>
            </div>
            <div className="likes-div">
                <button onClick={handleLikeBook} style={book.likes ? {backgroundColor:'rgb(125, 151, 116)'} : {backgroundColor: 'rgb(69, 88, 62)', opacity: 0.50}} className="like-btn">❤️</button>
            </div>
        </div>
    )
}

export default Book;
