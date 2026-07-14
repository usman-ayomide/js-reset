import { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleClick(){
    setHeadingText("Submitted");
  }

  function mouseOver(){
    setIsMouseOver(true);
  }

  function mouseOut(){
    setIsMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClick} 
        style={{backgroundColor: isMouseOver ? "black" : "white"}}
        onMouseOver={mouseOver} onMouseOut={mouseOut}>Submit
      </button>
    </div>
  );
}

export default App;