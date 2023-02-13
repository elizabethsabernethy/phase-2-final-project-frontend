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
        year: year,
        likes: 0,
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
      <form className="newBook" onSubmit={handleSubmit}>
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
        <label>
          Summary:
          <input
            type="textarea"
            name="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </label>
        <label>
          Year:
          <input
            type="number"
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
  
        <button type="submit">Add to Collection</button>
      </form>
    );
  }

export default AddBook;