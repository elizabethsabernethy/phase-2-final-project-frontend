import React, { useState } from "react";

function Book({book}){

    const[hideDetails, setHideDetails] = useState(true)

    function clickBook(){
        setHideDetails((hideDetails) => !hideDetails)
    }

    return(
        <div className="book">
            <div className="book-cover" onClick={clickBook}>
                <h2>{book.title} - {book.year}</h2>
                <h3>{book.author}</h3>
            </div>
            <div className="open-book" hidden={hideDetails}>
                <p>{book.summary}</p>
                <ul>
                    {book.themes.map((theme)=>{
                        return <li key={theme}>{theme}</li>
                    })}
                </ul>
                <h4>Likes: {book.likes}</h4>
                <button>Like Book</button>  <button>Unlike Book</button> 
            </div>
           
        </div>
    )
}

export default Book;
