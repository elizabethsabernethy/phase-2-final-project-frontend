import React, { useState } from "react";
import BookList from "./BookList";
import PickedBooks from "./PickedBooks";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";

function App(){

  const[clickedBooks, setClickedBooks] = useState([])

  function pickBook(book){
    setClickedBooks([...clickedBooks, book])
  }

  return(
    <div>
    <NavBar />
      <Switch>
        <Route exact path="/picked">
          <PickedBooks clickedBooks={clickedBooks}/>
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