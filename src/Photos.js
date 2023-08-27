import React from "react";
import "./App.css";

export default function Photos(props) {
  // To check if there are photos to display
  if (props.photos) {
    console.log(props.photos); // for debugging

    return (
      // Rendered content when there are photos
      <div className="row PhotosSection">
        {props.photos.map(function (photo, index) {
          return (
            <div className="col-4" key={index}>
              {/* To create a link to the original photo */}
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                {/* To display the photo */}
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
