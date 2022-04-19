import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import TrackDetail from './TrackDetail';


function UserPlaylistDetail({playlist, accessToken}) {
const [userPlaylistTracks, setUserPlaylistTracks] = useState([])
const [showTracks, setShowTracks] = useState(false);


  useEffect(() => {
    async function fetchMyPlaylistTracks() {
        let response = await fetch(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
            method: 'GET',
            headers: {
                'Accept': "application/json",
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
        })
        response = await response.json()
        console.log('USER PLAYLIST TRACKS', response)
        setUserPlaylistTracks(response)
    }

    fetchMyPlaylistTracks()

}, [accessToken, setUserPlaylistTracks])

const trackDetailInfo = userPlaylistTracks.items
console.log('TRACK DETAIL INFO', trackDetailInfo)
  // console.log('User Playlist Detail', playlist)

  const handleClick = () => {
    showTracks ? setShowTracks(false) : setShowTracks(true)
  }


  return (
    <div className='content-block content-block-secondary'>
      <div className='content-block-playlist'>
        <div className='playlist-details'>
          <img src={playlist.images[0].url}className='playlist-image' />
          <div className='data-field'>
            <label className='data-field-label'>Playlist Name</label>
            <div className='data-field-value'>{playlist.name}</div>
          </div>

          <div className='data-field'>
            <label className='data-field-label'>Number of Tracks</label>
            <div className='data-field-value'>{playlist.tracks.total}</div>
          </div>
        </div>
        <button className='button button-primary' onClick={handleClick}>{showTracks ? 'Hide Tracks' : 'View Tracks'}</button>
      </div>

      {showTracks ? (<div>
        {
          trackDetailInfo.map(trackDetail => {
            return <TrackDetail
              key={trackDetail.track.id}
              name={trackDetail.track.name}
              artist_name={trackDetail.track.artists[0].name}
              duration={trackDetail.track.duration}
              image={trackDetail.track.album.images[0].url} />
          })
        }
      </div>)
        : (<div></div>)
      }
      </div>
  )

  }

export default UserPlaylistDetail

