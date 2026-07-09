import Login from "./Login";


const isLoggedIn = false;

function render(){
  if(isLoggedIn){
    return <h1>Hello</h1>
  }
  else{
    return <Login />
    
  }
}

function App() {
  return (
    <div className="container">
      {render()}
    </div>
  );
}

export default App;