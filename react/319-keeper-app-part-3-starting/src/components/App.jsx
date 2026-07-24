import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";



function App() {
  const [content, setContent] = useState({
    title: "", content: ""
  });

  function handleChange(){
    const {name, value} = e.target;

    setContent((previous) => ({
      ...previous, [name] : value
    }));
  }
  function handleSubmit(e){
    e.preventDefault();
  }
  

  return (
    <div>
      <Header />
      <CreateArea 
        value={content} change={handleChange} submit={handleSubmit}
      />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;