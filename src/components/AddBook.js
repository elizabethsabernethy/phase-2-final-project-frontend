import React, {useState} from "react";

function AddBook({onAddBook}){

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [summary, setSummary] = useState("");
    const [year, setYear] = useState(1998);


    function handleSubmit(e) {
      e.preventDefault();
      e.preventDefault();
      const bookData = {
        title: title,
        author: author,
        summary: summary,
        likes: false,
        year: year
      };
      fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    })
      .then((resp) => resp.json())
      .then((newBook) => onAddBook(newBook));

    }
  
    return (
      <div>
        <h3>To add a new book, please fill out the form below.</h3>
        <form id="newBook" onSubmit={handleSubmit}>
        <div id='title-author-input'>
            <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        </div>
        <div >
            <label id='summary-label'>
                 Summary
                 <div>
                <textarea name="summary" value={summary} onChange={(e) => setSummary(e.target.value)} rows="4" cols="50" maxLength={500}>
                </textarea>
                 </div>
            </label>
        </div>
        <div id='year-input'> 
           <label>
            Year:
          <input
            type="number"
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label> 
        </div>
        <button type="submit">Add to Collection</button>
      </form>
      </div>
      
    );
  }

export default AddBook;
