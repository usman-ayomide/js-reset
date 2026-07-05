import React from "react";
import ReactDOM from "react-dom/client";
import {add, multiply, subtract, divide} from "./calculator";
// import * as calc from "./calculator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ul>
    <li>{add(1, 2)}</li> 
    <li>{multiply(2, 3)}</li> 
    <li>{subtract(7, 2)}</li> 
    <li>{divide(5, 2)}</li> 
  </ul>,

  // <ul>
  //   <h1>{calc.add(1, 2)}</h1>
  //   <h1>{calc.multiply(2, 3)}</h1>
  //   <h1>{calc.subtract(7, 2)}</h1>
  //   <h1>{calc.divide(5, 2)}</h1>
  // </ul>
);