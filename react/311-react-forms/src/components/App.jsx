import { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  function handleChange(e){
    setName(e.target.value);

    e.preventDefault();
  }

  function updateName(){
    setSubmittedName(name);
  }


  return (
    <div className="container">
      <h1>Hello {submittedName}</h1>

      <form onSubmit={handleChange}>
        <input 
          onChange={handleChange}
          type="text" placeholder="What's your name?" 
          value={name}
        />
        <button onClick={updateName}>Submit</button>
      </form>
      
    </div>
  );
}

export default App;