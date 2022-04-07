import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header"
import Landing from "./components/Landing"
import Dashboard from "./components/Dashboard"
import GroupingRules from "./components/GroupingRules"
import FilteringRules from "./components/FilteringRules"
import SongOrderRules from "./components/SongOrderRules"

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((data) => setUser(data));
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route exact path="/">
            <Landing user={user}/>
          </Route>
          <Route exact path="/rules/grouping">
            <GroupingRules />
          </Route> <Route exact path="/rules/filtering">
            <FilteringRules />
          </Route> <Route exact path="/rules/songorder">
            <SongOrderRules />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
