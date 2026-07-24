function CreateArea(props) {
  return (
    <div>
      <form onSubmit={props.submit}>
        <input name="title" placeholder="Title" 
          value={props.formData.title} onChange={props.change}
        />
        <textarea name="body" placeholder="Take a note..." 
          rows="3" value={props.formData.body} onChange={props.change}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;