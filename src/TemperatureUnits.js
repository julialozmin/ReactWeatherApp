import React, { useState } from "react";
import "./styles/TemperatureUnits.css";

export default function TemperatureUnits(props) {
  const [unit, setUnit] = useState("celsius");
  let roundedCelsius = Math.round(props.celsius);
  let roundedFahrenheit = Math.round((props.celsius * 9) / 5 + 32);
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="TemperatureUnits">
        <h1>{roundedCelsius}º</h1>

        <h1 className="degreesMeasurement">
          <span>C</span>/
          <a href="/" onClick={showFahrenheit}>
            F
          </a>
        </h1>
      </div>
    );
  } else {
    return (
      <div className="TemperatureUnits">
        <h1>{roundedFahrenheit}º</h1>

        <h1 className="degreesMeasurement">
          <a href="/" onClick={showCelsius}>
            C
          </a>
          /<span>F</span>
        </h1>
      </div>
    );
  }
}
