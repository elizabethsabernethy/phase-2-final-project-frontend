import React from "react";

function Filter({filterTitles}){

    function handleSearch(event){
        filterTitles(event.target.value)
    }

    return(
        <div>
            <label>
                Filter Books by name: 
                <input type='text' onChange={handleSearch}></input>
            </label>
        </div>
    )
}

export default Filter;
