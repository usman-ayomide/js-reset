import { useState } from "react";

function App() {
  
  let time = new Date().toLocaleTimeString();
  let isClicked = false;

  function getTime(){
    isClicked = true;
    console.log(time);
  }
  
  //setInterval(getTime, 1000);

  const [timer, setTimer] = useState(time);
//Challenge:
//1. Given that you can get the current time using:

//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);


  return (
    <div className="container">
      {!isClicked ? <h1>{time}</h1> : <h1>Time</h1>}
      {/* {!isClicked && time} */}
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;