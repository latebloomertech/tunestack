import React from 'react'
import { Link } from "react-router-dom"
import DashboardSettingsContainer from './DashboardSettingsContainer'
import FilterSelectionDetail from './FilterSelectionDetail'


function SettingsBoard({groupingSelection, songOrderSelection, filterSelection}) {



  // console.log(filterSelection)

  return (
    <div className='content-block content-block-primary'>
      <h2>User Settings</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', gap: '1em', marginBottom: '1em'}}>
        <DashboardSettingsContainer>
          <h3>Grouping Settings</h3>
          <p className='data-field-label'>Group by:</p>
          <div className='selection-field-value'>{groupingSelection}</div>
        </DashboardSettingsContainer>
        <DashboardSettingsContainer>
          <h3>Filter Settings</h3>
          <p className='data-field-label'>Include the following:</p>
          <div>
          {filterSelection?.map(item =>
        <FilterSelectionDetail
        key={item.value}
        filter={item} />)}
          </div>
        </DashboardSettingsContainer>
        <DashboardSettingsContainer>
          <h3>Order Settings</h3>
          <p className='data-field-label'>Order by:</p>
          <div className='selection-field-value'>{songOrderSelection}</div>
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