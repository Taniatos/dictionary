import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./App.css";

export default function Results(props) {
  // To check if there are results to display
  if (props.results) {
    return (
      // Rendered content when there are results
      <div className="Results">
        <section>
          {/* // To display the word */}
          <h4>{props.results.word}</h4>
          {/* To display phonetic pronunciation */}
          <Phonetics phonetics={props.results.phonetic} />
        </section>
        {/* To map through and display multiple meanings */}
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
