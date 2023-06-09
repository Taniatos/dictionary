import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./App.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h4>{props.results.word}</h4>
          <Phonetics phonetics={props.results.phonetic} />
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return "Sorry, we do not have the definition of this word.";
  }
}
