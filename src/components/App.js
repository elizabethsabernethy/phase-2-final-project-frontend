import React, { useEffect, useState } from "react";
import BookList from "./BookList";
import MyBookList from "./MyBookList";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import AddBook from "./AddBook";

function App(){

  const[myBooks, setMyBooks] = useState([])
  const[books, setBooks] = useState([])

  useEffect(()=>{
      fetch('http://localhost:3000/books')
      .then((resp)=> resp.json())
      .then((books)=> setBooks(books))
  },[])

  useEffect(()=>{
    fetch('http://localhost:3000/myBooks')
    .then((resp)=> resp.json())
    .then((myBooks)=> setMyBooks(myBooks))
  },[])

  function onPickBook(myBook){
    setMyBooks([...myBooks, myBook])
  }

  function onRemoveBook(removedBook){
      const updatedBooks = books.filter((book) => book.id !== removedBook.id);
      setBooks(updatedBooks);
    }

  function onBookReturn(book){
    setBooks([...books, book])
   } 

  function onRemoveMyBook(removedBook){
    const updatedBooks = myBooks.filter((book) => book.id !== removedBook.id);
    setMyBooks(updatedBooks);
  }

  function onAddBook(newBook){
    setBooks([...books, newBook])
  }

  return(
    <div>
    <NavBar />
      <Switch>
        <Route exact path="/picked">
          <MyBookList onBookReturn={onBookReturn} clickedBooks={myBooks} onRemoveMyBook={onRemoveMyBook}/>
        </Route>
        <Route exact path="/collection">
          <BookList books={books} setBooks={setBooks} onPickBook={onPickBook} onRemoveBook={onRemoveBook}/>
        </Route>
        <Route exact path="/addBook">
          <AddBook onAddBook={onAddBook}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App;