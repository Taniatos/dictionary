import React from "react";
import "./App.css";
export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className="Phonetics">
        <p>/{props.phonetics}/</p>
      </div>
    );
  } else {
    return null;
  }
}
