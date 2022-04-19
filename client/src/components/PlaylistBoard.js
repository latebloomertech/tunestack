import React from 'react'
import PlaylistDetail from "./PlaylistDetail"

function PlaylistBoard({ playlists, accessToken}) {

  return (
    <div className='content-block content-block-primary'>
      <h2>Your TuneStack Playlists</h2>
      {Object.keys(playlists).map(playlist => {
        // console.log('playlist', playlist)
        return <PlaylistDetail
          key={playlists[playlist].title}
          title={playlists[playlist].title}
          tracks={playlists[playlist].included_tracks}
          accessToken={accessToken}/>
      })}
    </div>
  )
}

export default PlaylistBoard