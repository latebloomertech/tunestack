import React, { useState } from 'react'
import TrackDetail from './TrackDetail';
import { Link } from "react-router-dom"


function PlaylistDetail({ title, tracks }) {
  const [showTracks, setShowTracks] = useState(false);

  const handleClick = () => {
    showTracks ? setShowTracks(false) : setShowTracks(true)
  }

  const handleSaveClick = () => {

  }

console.log ('tracks', tracks)
console.log('TITLE !!', title)
// console.log('album image', tracks[0].album.images[0].url)

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
        <button className='button button-primary'>Save</button>
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