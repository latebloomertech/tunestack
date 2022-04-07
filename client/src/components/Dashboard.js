import React from 'react'
import SettingsBoard from "./SettingsBoard"
import PlaylistBoard from "./PlaylistBoard"

function Dashboard() {
  return (
    <div>
        <div className='settings-board'>
        <SettingsBoard />
        </div>
        <div className='playlist-board'>
        <PlaylistBoard />
        </div>
    </div>
  )
}

export default Dashboard