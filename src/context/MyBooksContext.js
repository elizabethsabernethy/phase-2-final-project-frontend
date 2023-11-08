import React, {useState, useEffect} from "react";

const MyBooksContext = React.createContext();

function MyBooksProvider({ children }) {

    const [myBooks, setMyBooks] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/myBooks')
        .then((resp)=> resp.json())
        .then((myBooks)=> setMyBooks(myBooks))
      },[])

    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    return <MyBooksContext.Provider value={{myBooks, setMyBooks}}>{children}</MyBooksContext.Provider>;
  }
  
  export { MyBooksContext, MyBooksProvider };