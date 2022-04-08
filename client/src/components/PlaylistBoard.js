import React from 'react'
import PlaylistDetail from "./PlaylistDetail"

function PlaylistBoard() {
  return (
    <div className='base-container-primary'>
      <h2>Your TuneStack Playlists</h2>
      <PlaylistDetail />
      <PlaylistDetail />
      <PlaylistDetail />
    </div>
  )
}

export default PlaylistBoard