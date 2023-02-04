import React, { useState } from "react";

function Book({book}){

    const[hideDetails, setHideDetails] = useState(true)

    function clickBook(){
        setHideDetails((hideDetails) => !hideDetails)
    }

    return(
        <div className="book">
            <div className="book-cover" onClick={clickBook}>
                <h2 className="title">{book.title}</h2>
                <h3 className="author">{book.author}</h3>
                <h3 className="year">{book.year}</h3>
            </div>
            <div className="open-book" hidden={hideDetails}>
                <p className="summary">{book.summary}</p>
                <ul>
                    {book.themes.map((theme)=>{
                        return <li className="theme" key={theme}>{theme}</li>
                    })}
                </ul>
                <h4 className="likes">Likes: {book.likes}</h4>
                <button>Like Book</button>  <button>Unlike Book</button> 
            </div>
           
        </div>
    )
}

export default Book;
