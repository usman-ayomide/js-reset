import { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [click, setClick] = useState(false);

  function updateName(){
    setClick(true);
  }

  function handleChange(e){
    setName(e.target.value);
  }


  return (
    <div className="container">
      <h1>Hello {!click ? "" : name} </h1>
      <input 
        onChange={handleChange}
        type="text" placeholder="What's your name?" 
        value={name}
      />
      <button onClick={updateName}>Submit</button>
    </div>
  );
}

export default App;