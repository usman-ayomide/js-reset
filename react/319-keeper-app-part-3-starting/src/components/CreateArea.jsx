function CreateArea(props) {
  return (
    <div>
      <form onSubmit={props.submit}>
        <input name="title" placeholder="Title" 
          value={props.value.title} onChange={props.change}
        />
        <textarea name="body" placeholder="Take a note..." 
          rows="3" value={props.value.body} onChange={props.change}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;