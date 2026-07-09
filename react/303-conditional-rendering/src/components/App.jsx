import Login from "./Login";


const isLoggedIn = false;

const currentTime = new Date(2019, 11, 1, 18).getHours();

function App() {
  return (
    <div className="container">
      {
        // isLoggedIn ? <h1>Hello</h1> : <Login />
        currentTime > 12 && <h1>why</h1>
      }
    </div>
  );
}

export default App;