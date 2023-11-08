import React, { useContext, useEffect, useState } from "react";
import BookList from "./BookList";
import MyBookList from "./MyBookList";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import AddBook from "./AddBook";
import { BookContext } from "../context/BookContext";
import { MyBooksContext } from "../context/MyBooksContext";

function App(){

  const {books, setBooks} = useContext(BookContext);
  const {myBooks, setMyBooks} = useContext(MyBooksContext);

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
    alert(`${newBook.title} has been added to the 'Collection'`)
    setBooks([...books, newBook])
  }

  return(
    <div>
    <NavBar />
      <Switch>
        <Route exact path="/picked">
          <MyBookList onBookReturn={onBookReturn} onRemoveMyBook={onRemoveMyBook}/>
        </Route>
        <Route exact path="/collection">
          <BookList onPickBook={onPickBook} onRemoveBook={onRemoveBook}/>
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