import React from "react";
import "./DateHour.css";

export default function DateHour() {
  let dateHourData = {
    date: "Tuesday, 28th November 2023",
    hour: "19:20",
  };
  return (
    <div className="DateHour">
      <div className="row">
        <div className="col-9">
          <h6 className="dateHour">{dateHourData.date}</h6>
        </div>
        <div className="col-3">
          <h6 className="dateHour">{dateHourData.hour}</h6>
        </div>
      </div>
    </div>
  );
}
