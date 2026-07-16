import { useState } from "react";

function App() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");

  function updateFname(e){
    setFname(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();

  }

  return (
    <div className="container">
      <h1>Hello {fName}</h1>
      <form onSubmit={handleSubmit}>
        <input name="fName" onChange={updateFname}
        placeholder="First Name" value={fName} />
        <input name="lName" placeholder="Last Name" />
        <button type="submit" onClick={updateFname}>Submit</button>
      </form>
    </div>
  );
}

export default App;