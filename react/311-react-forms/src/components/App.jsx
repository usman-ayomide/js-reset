import { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  function handleChange(e){
    setName(e.target.value);
  }

  function updateName(e){
    e.preventDefault();
    setSubmittedName(name);
  }


  return (
    <div className="container">
      <h1>Hello {submittedName}</h1>

      <form onSubmit={updateName}>
        <input 
          onChange={handleChange}
          type="text" placeholder="What's your name?" 
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default App;