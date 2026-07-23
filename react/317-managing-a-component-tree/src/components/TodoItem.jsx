import { useState } from "react";

function TodoItem(props){
  const [cross, setCross] = useState(false)

  function line(){
    setCross(true);
  }
  
  return (
    <li style={{textDecoration: !cross ? "" : "line-through"}}
      onClick={line}
    >{props.text}</li>
  );
}

export default TodoItem;