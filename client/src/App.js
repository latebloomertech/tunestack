import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <h1>TuneStack</h1>
      <h2>Page count: {count}</h2>
    </div>
  );
}

export default App;
