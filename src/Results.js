import React from "react";
import Meaning from "./Meaning";
import "./App.css";

export default function Result(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h4>{props.results.word}</h4>
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
    return null;
  }
}
