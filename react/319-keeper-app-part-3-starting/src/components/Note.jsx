function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.noteContent}</p>
      <button>DELETE</button>
    </div>
  );
}

export default Note;