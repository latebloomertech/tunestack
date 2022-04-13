import React, {useEffect, useState} from 'react'
import SettingsBoard from "./SettingsBoard"
import PlaylistBoard from "./PlaylistBoard"

function Dashboard({accessToken}) {
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
        <SettingsBoard />
        <PlaylistBoard />
    </div>
  )
}

export default Dashboard