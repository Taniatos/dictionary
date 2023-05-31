import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }
  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = "0d8a45bc34b38f19a974t8f13fco40ba";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let photoApiKey = `0d8a45bc34b38f19a974t8f13fco40ba`;
    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photoApiKey}`;
    axios.get(photoApiUrl).then(handlePexelsResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/083/317/original/book.png?1685129284"
          className="img-book"
          alt="Book"
        />
        <h1 className="text-center">Lexicopia</h1>
        <h2 className="text-center">Online Dictionary</h2>
        <div className="Form">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              className="search-word"
              autocomplete="off"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
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
        <Results results={results} />
        <Photos photos={photos}/>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
