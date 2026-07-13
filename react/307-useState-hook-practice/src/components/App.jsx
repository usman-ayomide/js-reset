import { useEffect, useState } from "react";

function App(){
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return(
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}
export default App;