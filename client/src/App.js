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
// import spotify_login from './helper_functions/spotify_login';


function App() {
  const [accessToken, setAccessToken] = useState(null)
  const [groupingSelection, setGroupingSelection] = useState()
  const [songOrderSelection, setSongOrderSelection] = useState()
  const [filterSelection, setFilterSelection] = useState([
    {
      value: 'danceability',
      selected_options: {
        high: true, 
        medium: true, 
        low: true
      }
    }, {
      value: 'tempo',
      selected_options: {
        high: true, 
        medium: true, 
        low: true
      }
    }, {
      value: 'energy',
      selected_options: {
        high: true, 
        medium: true, 
        low: true
      }
    }, {
      value: 'instrumentalness',
      selected_options: {
        high: true, 
        medium: true, 
        low: true
      }
    }, {
      value: 'popularity',
      selected_options: {
        high: true, 
        medium: true, 
        low: true
      }
    },
  ])

  // spotify_login()

  useEffect(() => {
    function getHashParams() {
      var hashParams = {};
      var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
      while (e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
      }
      // console.log(hashParams.access_token)

      setAccessToken(hashParams.access_token);

    }
    getHashParams()

  }, [setAccessToken])

  function handleGroupingSelect(value) {
    // console.log(value)
    setGroupingSelection(value)
  }

  function handleSongOrderSelect(value) {
    // console.log(value)
    setSongOrderSelection(value)

  }

  function handleFilterSelect(value, newSelectedOptions) {
    console.log(value, newSelectedOptions)
    let newFilterSelection = [].concat(filterSelection)
    const indexOfFilterSet = newFilterSelection.findIndex(filterSet => filterSet.value == value)
    newFilterSelection[indexOfFilterSet].selected_options = newSelectedOptions
    console.log(newFilterSelection)
    setFilterSelection(newFilterSelection)
  }

  function handleLogout() {
    setAccessToken(null)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header handleLogout={handleLogout} />
        <Routes>
          <Route exact path="/testing" element={<h1>Test Route</h1>} />
          {/* for user login - add back to Landing  - user={user} */}
          <Route exact path="/" element={<Landing accessToken={accessToken} />} />
          <Route exact path="/rules/grouping" element={<GroupingRules handleGroupingSelect={handleGroupingSelect} groupingSelection={groupingSelection}/>} />
          <Route exact path="/rules/filtering" element={<FilteringRules handleFilterSelect={handleFilterSelect} filterSelection={filterSelection}/>} />
          <Route exact path="/rules/songorder" element={<SongOrderRules handleSongOrderSelect={handleSongOrderSelect} songOrderSelection={songOrderSelection}/>} />
          <Route exact path="/dashboard" element={<Dashboard accessToken={accessToken} groupingSelection={groupingSelection} songOrderSelection={songOrderSelection} filterSelection={filterSelection}/>} />
          <Route exact path="/logout" element={<Logout setAccessToken={setAccessToken} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

 //ADD BACK THE FOLLOWING CODE FOR USER LOGIN AUTHENTICATION Rails server
  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   fetch("/me")
  //     .then((r) => r.json())
  //     .then((data) => setUser(data));
  // }, []);