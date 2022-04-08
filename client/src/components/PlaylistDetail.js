import React, { useState } from 'react'
import TrackDetail from './TrackDetail';

function PlaylistDetail() {
  const [showTracks, setShowTracks] = useState(false);
  //const [buttonText, setButtonText] = useState("View Tracks");

  const handleClick = () => {
    showTracks ? setShowTracks(false) : setShowTracks(true)
    //showTracks ? setButtonText("Hide Tracks") : setButtonText("View Tracks")
  }

  //const buttonText = () => showTracks ? "View Tracks" : "Hide"
  return (
    <div className='content-block content-block-secondary'>
      <div className='content-block-playlist'>
        <div className='playlist-details'>
          <img src='https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228' className='playlist-image' />
          <div className='data-field'>
            <label className='data-field-label'>Playlist Name</label>
            <div className='data-field-value'>March 2018</div>
          </div>

          <div className='data-field'>
            <label className='data-field-label'>Number of Tracks</label>
            <div className='data-field-value'>34</div>
          </div>
        </div>
        <button className='button button-tertiary' onClick={handleClick}>{showTracks ? 'Hide Tracks' : 'View Tracks'}</button>
      </div>

      {showTracks ? (<div>
        <TrackDetail />
        <TrackDetail />
        <TrackDetail />
      </div>)
        : (<div></div>)
      }

    </div>
  )
}

export default PlaylistDetail