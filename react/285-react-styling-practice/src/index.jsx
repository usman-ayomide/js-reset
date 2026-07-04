//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.


import React from "react";
import ReactDOM from "react-dom/client";


const time = new Date();
const currentHour = time.getHours();
const customStyle = {
    color: ""
};

function timing(){
    let greeting;
    
    if(currentHour < 12){
        greeting = "Good morning";
        customStyle.color = "red";
    }
    else if(currentHour < 18){
        greeting = "Good Afternoon";
        customStyle.color = "green";
    }
    else{
        greeting = "Good Evening";
        customStyle.color = "blue";
    }
    return greeting;
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <h1 className="heading" style={customStyle}>{timing()}</h1>
);