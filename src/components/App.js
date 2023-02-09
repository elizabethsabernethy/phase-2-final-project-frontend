import React, { useState } from "react";
import BookList from "./BookList";
import PickedBooks from "./PickedBooks";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";

function App(){

  const[clickedBook, setClickedBook] = useState([])

  function pickBook(book){
    setClickedBook(book)
  }

  return(
    <div>
    <NavBar />
      <Switch>
        <Route exact path="/picked">
          <PickedBooks clickedBook={clickedBook}/>
        </Route>
        <Route exact path="/">
          <BookList pickBook={pickBook}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;