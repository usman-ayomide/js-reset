import { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  //const [submitColor, setSubmitColor] = useState("white");
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [color, setColor] = useState(true);

  function handleClick(){
    setHeadingText("Submitted");
  }

  function mouseMovement(){
    setIsMouseOver(true);
  }

  function revertColor(){
    setColor(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClick} 
        style={{backgroundColor: isMouseOver && color ? "black" : "white"}}
        onMouseOver={mouseMovement} onMouseOut={revertColor}>Submit
      </button>
    </div>
  );
}

export default App;