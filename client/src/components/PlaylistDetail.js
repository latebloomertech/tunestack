import React, { useState } from 'react'
import TrackDetail from './TrackDetail';

function PlaylistDetail({ title, tracks }) {
  const [showTracks, setShowTracks] = useState(false);

  const handleClick = () => {
    showTracks ? setShowTracks(false) : setShowTracks(true)

  }

  return (
    <div className='content-block content-block-secondary'>
      <div className='content-block-playlist'>
        <div className='playlist-details'>
          <img src='https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228' className='playlist-image' />
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
      </div>

      {showTracks ? (<div>
        {
          tracks.map(track => {
            <TrackDetail
              key={track.id}
              name={track.name}
              artist_name={track.artists[0].name}
              duration={track.duration} />
          })
        }
      </div>)
        : (<div></div>)
      }

    </div>
  )
}

export default PlaylistDetail