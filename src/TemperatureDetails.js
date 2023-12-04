import React from "react";
import "./TemperatureDetails.css";

export default function TemperatureDetails() {
  let TemperatureDetailsValues = {
    humidity: "100",
    wind: "4",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-night.png",
  };
  return (
    <div className="TemperatureDetails">
      <div className="mainIcon">
        <img src={TemperatureDetailsValues.imgUrl} alt="weather icon" />
      </div>

      <h6 className="dailyValues">
        Humidity
        <span> {TemperatureDetailsValues.humidity}</span>%
        <br />
        Wind
        <span> {TemperatureDetailsValues.wind} </span>
        km/h
      </h6>
    </div>
  );
}
