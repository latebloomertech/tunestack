import React from 'react'
import { Link } from "react-router-dom"


function UserPlaylistDetail({playlist}) {

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
        <button className='button button-primary'>Future</button>
      </div>
      </div>
  )

  }

export default UserPlaylistDetail

