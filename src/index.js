import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { StarRating } from "./StarRating";
// import './index.css';
// import App from './App';

function Test () {
  const [movieRating, setMovieRating] = useState(0)
  return (
    <div>
      <StarRating  maxRating={10}
      messages={[
        "Terrible",
        "Bad",
        "Okay",
        "Good",
        "Great",
        "Amazing",
        "Incredible",
        "Unbelievable",
        "Mind-Blowing",
        "Masterpiece",
      ]}
      onSetRating={setMovieRating}
      />
      <p>This movie has {movieRating} rating</p>
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating
      maxRating={10}
      messages={[
        "Terrible",
        "Bad",
        "Okay",
        "Good",
        "Great",
        "Amazing",
        "Incredible",
        "Unbelievable",
        "Mind-Blowing",
        "Masterpiece",
      ]}
    /> */}
    <Test />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
