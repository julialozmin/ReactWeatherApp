import React from "react";
import "./Weather.css";
import Form from "./Form";
import DateHour from "./DateHour";
import CityDetails from "./CityDetails";
import TemperatureDetails from "./TemperatureDetails";
import Forecast from "./Forecast";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="col-12">
              <Form />
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="row">
                <div className="col-12">
                  <DateHour />
                </div>
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
              <Forecast />
            </div>
          </div>
        </div>
        <small>
          Coded by{" "}
          <a href="http://www.linkedin.com/in/julia-lozoya-25a400146">
            Julia Lozoya
          </a>
          , available open source on{" "}
          <a href="https://github.com/julialozmin/ReactWeatherApp.git">
            GitHub
          </a>{" "}
          and hosted on <a href="https://www.netlify.com/">Netlify</a>
        </small>
      </div>
    </div>
  );
}
