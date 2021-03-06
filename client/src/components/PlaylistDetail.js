import React, { useState, useEffect } from 'react'
import TrackDetail from './TrackDetail';
import { Link } from "react-router-dom"
import { order_tracks } from '../helper_functions/order_tracks';
import { group_tracks } from '../helper_functions/group_tracks';

function PlaylistDetail({ title, tracks, accessToken, songOrderSelection}) {
  const [showTracks, setShowTracks] = useState(false);
  const [saved, setSaved] = useState()
  const [spotifyUserData, setSpotifyUserData] = useState([])
  // const [newPlaylist, setNewPlaylist] = useState([])

  const handleClick = () => {
    showTracks ? setShowTracks(false) : setShowTracks(true)
  }

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET',
        headers: {
          'Accept': "application/json",
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
      })
      response = await response.json()
      // console.log('SPOTIFY USER DATA', response)
      setSpotifyUserData(response)
    }

    fetchMyAPI()

  }, [accessToken, setSpotifyUserData])


  const handleSaveClick = () => {

    setSaved(true)

    const createdPlaylist = {
      "name": `TuneStack: ${title}`,
      "description": "TuneStack created"
    }

    fetch(`https://api.spotify.com/v1/users/${spotifyUserData.id}/playlists`, {
      method: 'POST',
      headers: {
        'Accept': "application/json",
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(createdPlaylist),
    })
      .then((response) => response.json())
      .then((data) => addPlaylistTracks(data))
  }

  const addPlaylistTracks = (newPlaylist) => {

    const newPlaylistTracksIDArray = tracks?.map(track => {
      const trackArray = `spotify:track:${track.id}`
      return trackArray
    })

    // console.log('HELLO', newPlaylistTracksIDArray)

    const playlistTracksString = `${newPlaylistTracksIDArray.join(',')}`
    // console.log('THE STRING', playlistTracksString)

    fetch(`https://api.spotify.com/v1/playlists/${newPlaylist.id}/tracks?uris=${playlistTracksString}`, {
      method: 'POST',
      headers: {
        'Accept': "application/json",
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    })
      .then((response) => response.json())
      .then((data) => console.log('ADDED TRACK TO PLAYLIST', data))

  }

  console.log('tracks', tracks)

  const sorted_tracks = order_tracks(tracks, songOrderSelection)
  console.log('SORTED', sorted_tracks)

  return (
    <div className='content-block content-block-secondary'>
      <div className='content-block-playlist'>
        <div className='playlist-details'>
          <img src={tracks[0].album.images[0].url} className='playlist-image' />
          <div className='data-field-name'>
            <label className='data-field-label'>Playlist Name</label>
            <div className='data-field-value'>{title}</div>
          </div>

          <div className='data-field-number'>
            <label className='data-field-label'>Number of Tracks</label>
            <div className='data-field-value'>{tracks.length}</div>
          </div>
        </div>
        <button className='button button-primary' onClick={handleClick}>{showTracks ? 'Hide Tracks' : 'View Tracks'}</button>
        <Link to={"/save/confirmation"}>
          <button className='button button-primary' onClick={handleSaveClick}>{saved ? 'Saved' : 'Save'}</button>
        </Link>
      </div>

      {showTracks ? (<div>
        {
          tracks.map(track => {
            return <TrackDetail
              key={track.id}
              name={track.name}
              artist_name={track.artists[0].name}
              duration={track.duration}
              image={track.album.images[0].url} />
          })
        }
      </div>)
        : (<div></div>)
      }

    </div>
  )
}

export default PlaylistDetail

// 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228'


// useEffect(() => {
//   async function postTuneStackPlaylist() {
//     let response = await fetch(`https://api.spotify.com/v1/users/${spotifyUserData.id}/playlists`, {
//       method: 'POST',
//       headers: {
//         'Accept': "application/json",
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${accessToken}`
//     },
//       body: {
//         'name' : `TuneStack ${title}`,
//         'description' : 'TuneStack created'
//       }
//   })
//   response = await response.json()
//   console.log('POST PLAYLIST RESPONSE', response)
// }

// postTuneStackPlaylist()

// }, [accessToken, spotifyUserData])

// *****BELOW BASIC NAME SORT WORKING******
  // const sorted_tracks = tracks.sort(function (a, b) {
  //   const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  //   const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  //   if (nameA < nameB) {
  //     return -1;
  //   }
  //   if (nameA > nameB) {
  //     return 1;
  //   }

  //   // names must be equal
  //   return 0;
  // });