import React from "react";
import "./App.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <section className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      <p className="Definition">{props.meaning.definition}</p>
      <p className="Example">{props.meaning.example}</p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </section>
  );
}
