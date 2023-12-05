import React from "react";
import "./Card.css";
import Form from "./Form";
import DateHour from "./DateHour";
import CityDetails from "./CityDetails";
import TemperatureDetails from "./TemperatureDetails";
import Forecast from "./Forecast";

export default function Card() {
  return (
    <div className="Card">
      <div className="container">
        <div className="cardStructure">
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
      </div>
    </div>
  );
}
