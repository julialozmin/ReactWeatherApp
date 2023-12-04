import "./Forecast.css";

export default function Forecast() {
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
