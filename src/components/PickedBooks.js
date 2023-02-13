import React, {useState} from "react";

function PickedBooks({returnBook, clickedBooks, removeFromMyBooks}){

    //use fecth to get myBooks?
    //add click function so user can return book, fetch delete from myBooks db.json

    const[hideDetails, setHideDetails] = useState(true)

    function hoverBook(){
        setHideDetails((hideDetails) => !hideDetails)
    }
    
    function clickBook(book){
        returnBook(book)
        removeFromMyBooks()
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
                        <p className="theme-header">Themes</p>
                        <ul>
                            {book.themes.map((theme)=>{
                                return <li className="theme" key={theme}>{theme}</li>
                            })}
                        </ul>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PickedBooks;
