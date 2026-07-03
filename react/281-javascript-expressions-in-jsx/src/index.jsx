import React from "react";
import ReactDOM from "react-dom/client";

const fName = "Usman";
const lName = "Ayomide";
//const num = 9;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <h1>Hello {fName} {lName}!</h1>
        <p>Your lucky number is {Math.floor(Math.random() * 100)}.</p>
    </div>
);