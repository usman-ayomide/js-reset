import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));

let count = 0;

function increase(){
  count++;
  root.render(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}


root.render(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
  </div>
);