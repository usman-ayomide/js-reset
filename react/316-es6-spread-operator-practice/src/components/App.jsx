import { useState } from "react";

function App() {
  const [input, setInput] = useState({
    todo: ""
  });

  function handleChange(e){
    const {todo, value} = e.target
    
    setInput((previous) => ({
      ...previous, [todo] : value
    }))
  }
  

  function handleSubmit(e){
    e.preventDefault();
  }



  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form" onSubmit={handleSubmit}>
        <input type="text" name="todo" value={input.todo} onChange={handleChange}/>
        <button type="submit">
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          <li>{input}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;