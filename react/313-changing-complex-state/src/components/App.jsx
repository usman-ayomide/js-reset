import { useState } from "react";

function App() {
  const [inputName, setInputName] = useState({
    fName: "", lName: ""
  });

  function handleChange(e){
    const {name, value} = e.target;

    setInputName(previous => ({
      ...previous, [name] : value
    }));

    //e.preventDefault();
  }


  return (
    <div className="container">
      <h1>Hello {inputName}</h1>

      <form onSubmit={handleChange}>
        <input name="fName" onChange={handleChange}
          placeholder="First Name" value={inputName.fName} 
        />
        <input name="lName" onChange={handleChange}
          placeholder="Last Name" value={inputName.lName} 
        />
        <button type="submit" onClick={handleChange}>Submit</button>
      </form>
    </div>
  );
}

export default App;