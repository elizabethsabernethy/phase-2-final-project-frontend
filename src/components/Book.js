import React, { useState } from "react";

function Book({book}){

    const[hideDetails, setHideDetails] = useState(true)

    function clickBook(){
        setHideDetails((hideDetails) => !hideDetails)
    }

    return(
        <div className="book">
            <div className="likes-div">
                <h4 className="likes">Likes: {book.likes}</h4>
                <button className="like-btn">👍</button>  <button className="like-btn">👎</button>
            </div>
            <div className="book-cover" hidden={!hideDetails} onClick={clickBook}>
                <h2 className="title">{book.title}</h2>
                <h3 className="author">{book.author}</h3>
                <h3 className="year">{book.year}</h3> 
            </div>
            <div className="open-book"  onClick={clickBook} hidden={hideDetails}>
                <p className="summary">{book.summary}</p>
                <p>Themes</p>
                <ul>
                    {book.themes.map((theme)=>{
                        return <li className="theme" key={theme}>{theme}</li>
                    })}
                </ul>
                
            </div>
           
        </div>
    )
}

export default Book;
