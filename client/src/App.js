import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Landing from "./components/Landing"
import Dashboard from "./components/Dashboard"
import GroupingRules from "./components/GroupingRules"
import FilteringRules from "./components/FilteringRules"
import SongOrderRules from "./components/SongOrderRules"
import Logout from './components/Logout';


function App() {
  const [accessToken, setAccessToken] = useState(null)


  useEffect(() => {
  function getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    console.log(hashParams.access_token)

   setAccessToken(hashParams.access_token);

}
getHashParams()

}, [setAccessToken])


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

  function handleLogout() {
    setAccessToken(null)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header handleLogout={handleLogout}/>
        <Routes>
          <Route exact path="/testing" element={<h1>Test Route</h1>}/>
          {/* for user login - add back to Landing  - user={user} */}
          <Route exact path="/"  element={<Landing accessToken={accessToken} />}/>
          <Route exact path="/rules/grouping" element={<GroupingRules handleGroupingSubmit={handleGroupingSubmit}/>}/>
          <Route exact path="/rules/filtering" element={<FilteringRules />}/>
          <Route exact path="/rules/songorder" element={<SongOrderRules />}/>
          <Route exact path="/dashboard" element={<Dashboard accessToken={accessToken}/>}/>
          <Route exact path="/logout" element={<Logout setAccessToken={setAccessToken}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
