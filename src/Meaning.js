import React from "react";
import "./App.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      <p>
        {props.meaning.definition}
        <br />
        <em>{props.meaning.example}</em>
      </p>
    </div>
  );
}
