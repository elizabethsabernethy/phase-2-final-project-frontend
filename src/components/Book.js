import React, { useState } from "react";

function Book({book, pickBook, likeBook}){

    const[hideDetails, setHideDetails] = useState(true)
    const[liked, setLiked] = useState(false)

    function hoverBook(){
        setHideDetails((hideDetails) => !hideDetails)
    }

    function clickBook(){
        pickBook(book)
    }

    function handleLikeBook(){
        if(!liked){
        setLiked(true)
        fetch(`http://localhost:3000/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
         likes: book.likes+=1
      }),
    })
      .then((resp) => resp.json())
      .then((updatedBook) => likeBook(updatedBook));
      alert(`Yay! We're so glad you liked ${book.title}`)
        }
        
    }

    function handleDislikeBook(){
        if(liked){
        setLiked(false)
        fetch(`http://localhost:3000/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
         likes: book.likes-=1
      }),
    })
      .then((resp) => resp.json())
      .then((updatedBook) => likeBook(updatedBook));
      alert(`Aww! We're sorry you disliked ${book.title}`)
        }
        
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
                <p className="theme-header">Themes</p>
                <ul>
                    {book.themes.map((theme)=>{
                        return <li className="theme" key={theme}>{theme}</li>
                    })}
                </ul>
            </div>
            <div className="likes-div">
                <button onClick={handleLikeBook} style={liked ? {backgroundColor:'rgb(125, 151, 116)'} : {backgroundColor: 'rgb(69, 88, 62)', opacity: 0.50}} className="like-btn">👍</button>  <button style={!liked? {backgroundColor: 'rgb(69, 88, 62)'} : {backgroundColor:'rgb(125, 151, 116)', opacity: 0.50}} onClick={handleDislikeBook} className="like-btn">👎</button>
            </div>
        </div>
    )
}

export default Book;
