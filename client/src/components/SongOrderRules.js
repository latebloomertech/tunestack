import React, { useState } from 'react'
import { Link } from "react-router-dom"
import SelectOption from './SelectOption'

const options = [
  {
      value: 'name',
      label: 'Name',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
  }, {
      value: 'duration',
      label: 'Duration',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
  }, {
      value: 'date_saved',
      label: 'Date Saved',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
  }, {
      value: 'popularity',
      label: 'Popularity',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
  },

]

function SongOrderRules() {

  function handleSongOrderSubmit() {
  }

  const [selectedOption, setSelectedOption] = useState(options[0].value)

  function handleSelect(value) {
      setSelectedOption(value)
  }

  return (
    <div className='content-block content-block-primary content-block-flow'>
      <h2 className='flow-header'>Almost done! How do you want to order the songs in your playlists?</h2>
      <div className='subtitle'>Choose an option below to order the songs within each playlist by that attribute:</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '1em', marginBottom: '2em', width: '100%' }}>
                {options.map(({ value, label, image }) => {
                    return <SelectOption
                        key={value}
                        selected={selectedOption == value}
                        handleSelect={handleSelect}
                        value={value}
                        label={label}
                        image={image}>
                    </SelectOption>
                })}
            </div>
      <form
        className='flow-form'
        onSubmit={handleSongOrderSubmit}>
        {/* <div>
          <p>Order the songs in each playlist by:</p>
          <div className='radio'>
            <input
              type="radio"
              name="songOrder"
              value="songOrderName" />
            <label> Name</label>
          </div>

          <div className='radio'>
            <input
              type="radio"
              name="songOrder"
              value="songOrderDuration" />
            <label> Duration</label>
          </div>

          <div className='radio'>
            <input
              type="radio"
              name="songOrder"
              value="songOrderDateSaved" />
            <label> Date Saved </label>
          </div>

          <div className='radio'>
            <input
              type="radio"
              name="songOrder"
              value="songOrderPopularity" />
            <label> Popularity </label>
          </div>
        </div> */}

        <div className='flow-nav-buttons'>
          <Link to={`/rules/filtering`} className='flow-previous-link'>
            <button className='button button-primary flow-previous-button'>
              Previous
            </button>
          </Link>
          <Link to={`/dashboard`} className='flow-next-link'>
            <input
              type="submit"
              value="See Results!"
              className='button button-primary flow-next-button'>
            </input>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default SongOrderRules


