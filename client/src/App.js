import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Landing from "./components/Landing"
import Dashboard from "./components/Dashboard"
import GroupingRules from "./components/GroupingRules"
import FilteringRules from "./components/FilteringRules"
import SongOrderRules from "./components/SongOrderRules"


function App() {
 
        //ADD BACK THE FOLLOWING CODE FOR USER LOGIN AUTHENTICATION Rails server
  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   fetch("/me")
  //     .then((r) => r.json())
  //     .then((data) => setUser(data));
  // }, []);

  function handleGroupingSubmit(e) {
    console.log(e)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/testing" element={<h1>Test Route</h1>}/>
          {/* for user login - add back to Landing  - user={user} */}
          <Route exact path="/"  element={<Landing />}/>
          <Route exact path="/rules/grouping" element={<GroupingRules handleGroupingSubmit={handleGroupingSubmit}/>}/>
          <Route exact path="/rules/filtering" element={<FilteringRules />}/>
          <Route exact path="/rules/songorder" element={<SongOrderRules />}/>
          <Route exact path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
