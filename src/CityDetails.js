import React from "react";
import "./CityDetails.css";

export default function CityDetails() {
  let cityDetailsValues = {
    city: "Chieti",
    description: "Mist",
    degrees: "0º",
  };
  return (
    <div className="CityDetails">
      <h2>{cityDetailsValues.city}</h2>
      <h6>{cityDetailsValues.description}</h6>
      <h1>{cityDetailsValues.degrees}</h1>

      <h1 className="degreesMeasurement">
        <a href="/">C</a>/<a href="/">F</a>
      </h1>
    </div>
  );
}
