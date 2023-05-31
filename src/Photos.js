import React from "react";
import "./App.css";
export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <div className="row PhotosSection">
        {props.photos.map(function (photo, index) {
          return (
            <div className="col-4" key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  className="img-fluid"
                  alt={photo.alt}
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return "not working";
  }
}
