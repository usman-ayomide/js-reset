import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";


function App() {
  //store the input data as initial empty strings
  const [formData, setFormData] = useState({
    title: "", body: ""
  });
  //notes array as initial empty array
  const [notes, setNotes] = useState([]);


  function handleChange(e){
    //destructure name and value of the inputs and save as the 
    //target value
    const {name, value} = e.target;

    //take everything in the formaData 
    // and set it to the new object
    setFormData((previous) => ({
      ...previous, [name] : value
    }));
  }


  function handleSubmit(e){
    //prevent default behaviour
    e.preventDefault();

    //add new form data to noes array
    //push new data into the array
    setNotes((previous) => {
      return [...previous, formData]
    });

    //set the form data back to empty strings
    setFormData({
      title: "", body: ""
    });
  }

  function deleteNote(id){
    //return array of notes where id is not what is clicked
    setNotes(previous => {
      return previous.filter((note, index) => {
        return index !== id;
      });
    });
  }
  
  return (
    <div>
      <Header />

      <CreateArea 
        value={formData} change={handleChange} submit={handleSubmit}
      />
      {notes.map((note, index) => {
        return (<Note 
          key={index} title={note.title} noteContent={note.body}
          onDelete={deleteNote} id={index}
        />);
      })}
      
      <Footer />
    </div>
  );
}

export default App;