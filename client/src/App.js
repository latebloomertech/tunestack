import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
   <BrowserRouter>
      <div className="App">
        <Switch>
         <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <h1>TuneStack</h1>
            <h2>Page count: {count}</h2>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
