import React from "react"
import ReactDOM from "react-dom/client";


const fName = "Usman";
const lName = "Ayomide";
const date = new Date();
//const year = 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <p>Created by {fName + " " + lName}</p>
        <p>Copyright {date.getFullYear()}.</p>
    </div>
);