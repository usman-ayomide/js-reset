import { useState } from "react";

function App() {
  const [inputName, setInputName] = useState({
    fName: "", lName: ""
  });
  //const [submittedName, setSubmittedName] = useState("");
  //console.log(inputName);

  function handleChange(e){
    const {name, value} = e.target;
    //console.log(name, value)

    setInputName((previous) => ({
      ...previous, [name]: value
  }));
  }

  function handleSubmit(e){
    e.preventDefault();
    //setSubmittedName(inputName);
    //console.log(submittedName.fName)
  }

  


  return (
    <div className="container">
      <h1>Hello {inputName.fName} {inputName.lName}</h1>

      <form onSubmit={handleSubmit}>
        <input name="fName" onChange={handleChange}
          placeholder="First Name" value={inputName.fName} 
        />
        <input name="lName" onChange={handleChange}
          placeholder="Last Name" value={inputName.lName} 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;