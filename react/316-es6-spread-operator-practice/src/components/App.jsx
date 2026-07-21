import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [update, setUpdate] = useState([]);

  function handleChange(e){
    setInput(e.target.value);
  }

  function addTodo(e){
    if(input.length === "") return;
    else {
      setUpdate((previous) => [
        ...previous, input
      ]);

      setInput("");
    }
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input type="text" value={input} onChange={handleChange}/>
        <button type="submit" onClick={addTodo}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {update.map((input, index => 
            <li key={index}>{input}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;