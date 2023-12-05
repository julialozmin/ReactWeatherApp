import React from "react";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Card />

      <small>
        Coded by{" "}
        <a href="http://www.linkedin.com/in/julia-lozoya-25a400146">
          Julia Lozoya
        </a>
        , available open source on{" "}
        <a href="https://github.com/julialozmin/ReactWeatherApp.git">GitHub</a>{" "}
        and hosted on <a href="https://www.netlify.com/">Netlify</a>
      </small>
    </div>
  );
}

export default App;
