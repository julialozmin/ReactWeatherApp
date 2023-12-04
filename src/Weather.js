import React from "react";
import "./Weather.css";
import Form from "./Form";
import DateHour from "./DateHour";
import CityDetails from "./CityDetails";
import TemperatureDetails from "./TemperatureDetails";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="col-12">
              <Form />
            </div>
            <div className="col-8">
              <div className="row">
                <DateHour />
              </div>

              <div className="row">
                <div className="col-6">
                  <CityDetails />
                </div>
                <div className="col-6">
                  <TemperatureDetails />
                </div>
              </div>
            </div>
            <div className="col-4">
              <ul className="forecastDays">
                <li>
                  Mon 15-19º
                  <span className="sun">
                    <i className="fa-regular fa-sun"></i>
                  </span>
                </li>
                <li>
                  Tue 16-13º
                  <span className="sun">
                    <i className="fa-regular fa-sun"></i>
                  </span>
                </li>
                <li>
                  Wed 20-14º
                  <span className="sun">
                    <i className="fa-regular fa-sun"></i>
                  </span>
                </li>
                <li>
                  Thu 17-12º
                  <span className="cloud">
                    <i className="fa-solid fa-cloud"></i>
                  </span>
                </li>
                <li>
                  Fri 15-9º
                  <span className="cloud">
                    <i className="fa-solid fa-cloud"></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <small>
          Coded by
          <a href="http://www.linkedin.com/in/julia-lozoya-25a400146">
            Julia Lozoya
          </a>
          , available open source on
          <a href="https://github.com/julialozmin/TheWeatherApp.git">GitHub</a>
          and hosted on <a href="https://www.netlify.com/">Netlify</a>
        </small>
      </div>
    </div>
  );
}
