import React from "react";
import BookList from "./BookList";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";

function App(){

  return(
    <div>
    <NavBar />
      <Switch>
        <Route exact path="/">
          <BookList />
        </Route>
      </Switch>
    </div>
  )
}

export default App;