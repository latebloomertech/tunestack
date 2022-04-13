import React, {useEffect, useState} from 'react'
import SettingsBoard from "./SettingsBoard"
import PlaylistBoard from "./PlaylistBoard"

function Dashboard({accessToken, groupingSelection, songOrderSelection, filterSelection}) {
  const [userSavedTracks, setUserSavedTracks] = useState([])


  useEffect(() => {
    async function fetchMySavedTracks() {
        let response = await fetch('https://api.spotify.com/v1/me/tracks?limit=50', {
            method: 'GET',
            headers: {
                'Accept': "application/json",
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
        })
        response = await response.json()
        console.log(response.items)
        setUserSavedTracks(response.items)
    }

    fetchMySavedTracks()

}, [accessToken, setUserSavedTracks])


  return (
    <div>
        <SettingsBoard groupingSelection={groupingSelection} songOrderSelection={songOrderSelection} filterSelection={filterSelection}/>
        <PlaylistBoard />
    </div>
  )
}

export default Dashboard