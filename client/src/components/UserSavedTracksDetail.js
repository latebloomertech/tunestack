import React from 'react'

function UserSavedTracksDetail({savedtracks}) {


  return (
    <div>
        <li>{savedtracks.track.name} ID: {savedtracks.track.id}</li>
    </div>
  )
}

export default UserSavedTracksDetail