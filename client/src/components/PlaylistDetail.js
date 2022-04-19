import React, { useState, useEffect } from 'react'
import TrackDetail from './TrackDetail';
import { Link } from "react-router-dom"


function PlaylistDetail({ title, tracks, accessToken}) {
  const [showTracks, setShowTracks] = useState(false);
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

    const createdPlaylist = {
      "name": title,
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

  fetch(`https://api.spotify.com/v1/playlists/${newPlaylist.id}/tracks?uris=spotify:track:60NwgFF3bzbpSmB3cSSAba`, {
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

// console.log ('tracks', tracks)
// console.log('TITLE !!', title)



  return (
    <div className='content-block content-block-secondary'>
      <div className='content-block-playlist'>
        <div className='playlist-details'>
          <img src={tracks[0].album.images[0].url}className='playlist-image' />
          <div className='data-field'>
            <label className='data-field-label'>Playlist Name</label>
            <div className='data-field-value'>{title}</div>
          </div>

          <div className='data-field'>
            <label className='data-field-label'>Number of Tracks</label>
            <div className='data-field-value'>{tracks.length}</div>
          </div>
        </div>
        <button className='button button-primary' onClick={handleClick}>{showTracks ? 'Hide Tracks' : 'View Tracks'}</button>
        <Link to={"/playlists"}>
        <button className='button button-primary' onClick={handleSaveClick}>Save</button>
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
              image={track.album.images[0].url}/>
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