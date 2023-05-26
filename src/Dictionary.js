import React, { useState } from "react";
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <img
        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/083/317/original/book.png?1685129284"
        className="img-book"
        alt="Book Image"
      />
      <h1 className="text-center">Lexicopia</h1>
      <h2 className="text-center">Online Dictionary</h2>
      <div className="Form">
        <form onSubmit={search}>
          <input
            type="search"
            className="search-word"
            placeholder="Enter a word..."
            autocomplete="off"
            onChange={handleKeywordChange}
          />
          <input
            type="submit"
            value="Search"
            className="search-button"
            id="search-button"
          />
        </form>
      </div>
      <h3 className="text-center">Suggestions: cat, orange, palm ...</h3>
    </div>
  );
}
