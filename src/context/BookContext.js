import React, {useState, useEffect} from "react";

const BookContext = React.createContext();

function BookProvider({ children }) {

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/books')
        .then((resp)=> resp.json())
        .then((books)=> setBooks(books))
    },[])

    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    return <BookContext.Provider value={{books, setBooks}}>{children}</BookContext.Provider>;
  }
  
  export { BookContext, BookProvider };