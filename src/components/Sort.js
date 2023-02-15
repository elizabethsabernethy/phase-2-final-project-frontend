import React from "react";

function Sort({handleSetSortBy}){

    function sortBooks(event){
        handleSetSortBy(event.target.value)
    }

    return(
        <div>
            <select onChange={sortBooks} name="books_Sort">
            <option value="Sort Books">Sort Books</option>
            <option value="A-Z">Titles: A - Z</option>
            <option value="Z-A">Titles: Z - A</option>
            <option value="oldest">Oldest</option>
            <option value="newest">Newest</option>
            </select>
        </div>
    )
}

export default Sort;
