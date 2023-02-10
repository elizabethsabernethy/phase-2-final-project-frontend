import React, { useEffect, useState } from "react";
import BookList from "./BookList";
import PickedBooks from "./PickedBooks";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";

function App(){

  const[myBooks, setMyBooks] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/myBooks')
    .then((resp)=> resp.json())
    .then((myBooks)=> setMyBooks(myBooks))
  },[])

  function pickBook(book){
    fetch('http://localhost:3000/myBooks',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      "title" : book.title,
      "author": book.author,
      "summary": book.summary,
      "themes": book.themes,
      "likes": book.likes,
      "year": book.year
      }),
    })
      .then((resp) => resp.json())
      .then((myBook)=> setMyBooks([...myBooks, myBook]))
    }

  return(
    <div>
    <NavBar />
      <Switch>
        <Route exact path="/picked">
          <PickedBooks clickedBooks={myBooks}/>
        </Route>
        <Route exact path="/collection">
          <BookList pickBook={pickBook}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App;