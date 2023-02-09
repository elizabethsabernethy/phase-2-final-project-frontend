import React, { useState } from "react";

function Book({book, pickBook}){

    const[hideDetails, setHideDetails] = useState(true)

    function hoverBook(){
        setHideDetails((hideDetails) => !hideDetails)
    }

    function clickBook(){
        pickBook(book)
    }

    function likeBook(){
        console.log('like')
    }

    function dislikeBook(){
        console.log('dislike')
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
                <button onClick={likeBook} className="like-btn">👍</button>  <button onClick={dislikeBook} className="like-btn">👎</button>
            </div>
        </div>
    )
}

export default Book;
