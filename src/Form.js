import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
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
          <button className="btn btn-outline-secondary-current" type="button">
            Current Location
          </button>
        </div>
      </form>
    </div>
  );
}
