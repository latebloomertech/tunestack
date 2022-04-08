import React from 'react'
import SettingsBoard from "./SettingsBoard"
import PlaylistBoard from "./PlaylistBoard"

function Dashboard() {
  return (
    <div>
        <SettingsBoard />
        <PlaylistBoard />
    </div>
  )
}

export default Dashboard