import React from 'react'
import { Link } from "react-router-dom"
import FilterSelector from './FilterSelector'

const filters = [
  {
    value: 'danceability',
    label: 'Danceability',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507',
    options: [{
      value: 'high',
      label: 'High',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    },{
      value: 'medium',
      label: 'Medium',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    },{
      value: 'low',
      label: 'Low',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    }]
  }, {
    value: 'tempo',
    label: 'Tempo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507',
    options: [{
      value: 'high',
      label: 'High',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    },{
      value: 'medium',
      label: 'Medium',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    },{
      value: 'low',
      label: 'Low',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    }]
  }, {
    value: 'energy',
    label: 'Energy',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507',
    options: [{
      value: 'high',
      label: 'High',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    },{
      value: 'medium',
      label: 'Medium',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    },{
      value: 'low',
      label: 'Low',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    }]
  }, {
    value: 'instrumentalness',
    label: 'Instrumentalness',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507',
    options: [{
      value: 'high',
      label: 'High',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    },{
      value: 'medium',
      label: 'Medium',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    },{
      value: 'low',
      label: 'Low',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    }]
  }, {
    value: 'popularity',
    label: 'Popularity',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507',
    options: [{
      value: 'high',
      label: 'High',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    },{
      value: 'medium',
      label: 'Medium',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    },{
      value: 'low',
      label: 'Low',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    }]
  },

]


function FilteringRules({handleFilterSelect, filterSelection}) {
  return (
    <div className='content-block content-block-primary content-block-flow'>
      <h2 className='flow-header'>What songs do you want to include in the playlists?</h2>
      <div className='subtitle'>Deselect any of the options below to remove songs that match:</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2em', marginBottom: '2em' }}>
        {filters.map(({ value, label, image, options }) => {
          return <FilterSelector
            key={value}
            // handleSelect={handleSelect}
            value={value}
            label={label}
            image={image}
            options={options}
            handleFilterSelect={handleFilterSelect}
            filterSelection={filterSelection}>
          </FilterSelector>
        })}
      </div>

      <form className='flow-form'>
        {/* <div>
          <p>Only include the following songs:</p>
          <div className='radio'>
            <input
              type="radio"
              name="filterbyPlays"
              value="filterFivePlays" />
            <label> Greater than 5 plays</label>
          </div>

          <div className='radio'>
            <input
              type="radio"
              name="filterByPlays"
              value="filterTenPlays" />
            <label> Greater than 10 plays</label>
          </div>

          <div className='radio'>
            <input
              type="radio"
              name="filterByPlays"
              value="filterTwentyPlays" />
            <label> Greater than 20 plays </label>
          </div>
        </div> */}

        <div className='flow-nav-buttons'>
          <Link to={`/rules/grouping`} className='flow-previous-link'>
            <button className='button button-primary flow-previous-button'>
              Previous
            </button>
          </Link>

          <Link to={`/rules/songorder`} className='flow-next-link'>
            <input
              // onSubmit={handleFilteringSubmit}
              type="submit"
              value="Next"
              className='button button-primary flow-next-button'>
            </input>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default FilteringRules