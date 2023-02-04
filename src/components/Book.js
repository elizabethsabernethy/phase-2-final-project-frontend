import React from "react";

function Book({book}){

    return(
        <div>
            <h2>{book.title} - {book.year}</h2>
            <h3>{book.author}</h3>
            <p>{book.summary}</p>
            <ul>
                {book.themes.map((theme)=>{
                    return <li key={theme}>{theme}</li>
                })}
            </ul>
            <h4>Likes: {book.likes}</h4>
            <button>Like Book</button>  <button>Unlike Book</button>
        </div>
    )
}

export default Book;
