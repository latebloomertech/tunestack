import React from 'react'
import { Link } from "react-router-dom"


function SettingsBoard() {
  return (
    <div className='base-container-primary'>
      <h2>User Settings</h2>
      <Link to={`/rules/grouping`}>
        <button className='button'>
          Edit Sort Settings
        </button>
      </Link>
    </div>
  )
}

export default SettingsBoard