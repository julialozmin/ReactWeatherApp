import React from "react";
import "./CityDetails.css";

export default function CityDetails(props) {
  let roundedTemperature = Math.round(props.data.temperature);
  return (
    <div className="CityDetails">
      <h2>{props.data.city}</h2>
      <h6 className="text-capitalize">{props.data.weatherDescription}</h6>
      <h1>{roundedTemperature}º</h1>

      <h1 className="degreesMeasurement">
        <a href="/">C</a>/<a href="/">F</a>
      </h1>
    </div>
  );
}
