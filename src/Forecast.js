import React from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  function displayForecast(response) {
    console.log(response.data);
  }

  let apiKey = `o214a6c6f6d2f53a6749b30tbf45c1ef`;
  let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
  axios.get(url).then(displayForecast);

  return (
    <div className="Forecast">
      <ul className="forecastDays">
        <li>
          Mon 15-19º
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-night.png"
            alt="forecast icon"
            className="forecast-icon"
          />
        </li>
        <li>
          Tue 16-13º
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-night.png"
            alt="forecast icon"
            className="forecast-icon"
          />
        </li>
        <li>
          Wed 20-14º
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-night.png"
            alt="forecast icon"
            className="forecast-icon"
          />
        </li>
        <li>
          Thu 17-12º
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-night.png"
            alt="forecast icon"
            className="forecast-icon"
          />
        </li>
        <li>
          Fri 15-9º
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-night.png"
            alt="forecast icon"
            className="forecast-icon"
          />
        </li>
      </ul>
    </div>
  );
}
