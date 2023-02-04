import React, {useState} from "react";
import BookList from "./BookList";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Book from "./Book";

function App(){

  const[chosenBook, setChosenBook] = useState({})

  function chooseBook(book){
      setChosenBook(book)
  }

  return(
    <div>
    <NavBar />
      <Switch>
      <Route exact path="/book">
          <Book book={chosenBook} />
        </Route>
        <Route exact path="/">
          <BookList chooseBook={chooseBook}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;