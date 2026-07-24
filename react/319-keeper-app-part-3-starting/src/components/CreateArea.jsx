function CreateArea(props) {
  return (
    <div>
      <form onSubmit={props.submit}>
        <input name="title" placeholder="Title" 
          value={props.content.title} onChange={props.change}
        />
        <textarea name="content" placeholder="Take a note..." 
          rows="3" value={props.content.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;