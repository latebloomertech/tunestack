import React, { useEffect, useState } from 'react'
import SettingsBoard from "./SettingsBoard"
import PlaylistBoard from "./PlaylistBoard"
import allTrackData from "./allTrackData.json"
import filter_tracks from '../helper_functions/filter_tracks'
import { group_tracks } from '../helper_functions/group_tracks'

function Dashboard({ accessToken, groupingSelection, songOrderSelection, filterSelection }) {
  const [userSavedTracks, setUserSavedTracks] = useState([])
  const [audioFeaturesData, setAudioFeaturesData] = useState([])
  const [combinedTrackData, setCombinedTrackData] = useState([])


  useEffect(() => {
    async function fetchMySavedTracks() {
      let response = await fetch('https://api.spotify.com/v1/me/tracks?limit=50&market=US', {
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

  }, [])

  // accessToken, setUserSavedTracks  [****Add back to above useEffect array if needed*****]

  useEffect(() => {
    async function fetchAudioFeaturesData() {

      const savedTracksArray = userSavedTracks?.map(item => item.track.id)
      console.log('saved tracks array', savedTracksArray)
      let response = await fetch(`https://api.spotify.com/v1/audio-features?ids=${savedTracksArray.join(',')}`, {
        method: 'GET',
        headers: {
          'Accept': "application/json",
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
      })
      response = await response.json()
      console.log('audio features', response.audio_features)
      setAudioFeaturesData(response.audio_features)
    }

    fetchAudioFeaturesData()

  }, [accessToken, setAudioFeaturesData, userSavedTracks])

  // const allTrackData = userSavedTracks?.concat(audioFeaturesData)
  // console.log(allTrackData)

  const basicTrackData = userSavedTracks?.map(item => item.track)
  console.log('basicTrackData', basicTrackData)

  const allTrackData = basicTrackData?.map(t1 => {
    // console.log('T1', t1)
    // console.log('AUDIOFEAT', audioFeaturesData)
    if (audioFeaturesData && audioFeaturesData[0] !== null) {
      return ({ ...t1, ...audioFeaturesData?.find(t2 => t2.id === t1.id) })
    } else {
      return { ...t1 }
    }
  })
  console.log('ALL TRACK DATA BIIIITCH', allTrackData)
  console.log('FILTER SELECTION', filterSelection)

  const filtered_tracks = filter_tracks(allTrackData, filterSelection)

  console.log('filtered array of tracks', filtered_tracks)

  const grouped_tracks = group_tracks(filter_tracks, groupingSelection)


  return (
    <div>
      <SettingsBoard groupingSelection={groupingSelection} songOrderSelection={songOrderSelection} filterSelection={filterSelection} />
      <PlaylistBoard />
    </div>
  )
}

export default Dashboard