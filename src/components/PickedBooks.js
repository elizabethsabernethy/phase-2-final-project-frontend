import React, {useState} from "react";

function PickedBooks({clickedBook}){

    const[hideDetails, setHideDetails] = useState(true)

    function hoverBook(){
        setHideDetails((hideDetails) => !hideDetails)
    }

    return(
        <div className="book">
            {console.log(clickedBook)}
            <div className="book-cover" hidden={!hideDetails} onMouseEnter={hoverBook}>
                <h2 className="title">{clickedBook.title}</h2>
                {/* <h3 className="author">{clickedBook.author}</h3>
                <h3 className="year">{clickedBook.year}</h3>  */}
            </div>
            <div className="open-book"  onMouseLeave={hoverBook} hidden={hideDetails}>
                <p className="summary">{clickedBook.summary}</p>
                {/* <p className="theme-header">Themes</p>
                <ul>
                    {clickedBook.themes.map((theme)=>{
                        return <li className="theme" key={theme}>{theme}</li>
                    })}
                </ul> */}
            </div>
        </div>
    )
}

export default PickedBooks;
