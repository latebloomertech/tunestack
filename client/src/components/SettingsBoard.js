import React from 'react'
import { Link } from "react-router-dom"
import DashboardSettingsContainer from './DashboardSettingsContainer'


function SettingsBoard() {
  return (
    <div className='content-block content-block-primary'>
      <h2>User Settings</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', gap: '1em', marginBottom: '1em'}}>
        <DashboardSettingsContainer>
          <h3>Grouping Settings</h3>
          <div>Group by year saved</div>
        </DashboardSettingsContainer>
        <DashboardSettingsContainer>
          <h3>Filter Settings</h3>
          <div>Filtered by danceability</div>
        </DashboardSettingsContainer>
        <DashboardSettingsContainer>
          <h3>Order Settings</h3>
          <div>Ordered date added ascending</div>
        </DashboardSettingsContainer>
      </div>

      <Link to={`/rules/grouping`}>
        <button className='button button-primary'>
          Edit Sort Settings
        </button>
      </Link>
    </div >
  )
}

export default SettingsBoard