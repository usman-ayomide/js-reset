import React from "react";
import ReactDOM from "react-dom/client";

const customStyle = {
    color: "red",
    fontSize: "20px",
    border: "1px solid black"
}

customStyle.color = "blue";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <h1 style={customStyle}>Hello world!</h1>
);