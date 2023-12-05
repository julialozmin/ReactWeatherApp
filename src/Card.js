import React from "react";
import "./Card.css";
import DateHour from "./DateHour";
import CityDetails from "./CityDetails";
import TemperatureDetails from "./TemperatureDetails";
import Forecast from "./Forecast";
import axios from "axios";

export default function Card() {
  return (
    <div className="Card">
      <div className="row">
        <div className="col-12">
          <form>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a city"
                aria-describedby="button-addon2"
              />
              <button className="btn btn-outline-secondary" type="button">
                Search
              </button>
              <button
                className="btn btn-outline-secondary-current"
                type="button"
              >
                Current Location
              </button>
            </div>
          </form>
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
  );
}
