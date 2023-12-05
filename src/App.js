import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Card />

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

export default App;
