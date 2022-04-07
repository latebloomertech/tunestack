import React, {useState} from 'react'
import { Link } from "react-router-dom"

function SongOrderRules() {

  function handleSongOrderSubmit() {
  }

  return (
    <div className='flow-card'>
    <h2 className='flow-card-title'>Almost done! How do you want to order the songs in your playlists?</h2>

    <div className='flow-card-choices-container'>
      <p>Order the songs by:</p>

      <form
        className='flow-card-form'
        onSubmit={handleSongOrderSubmit}>

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

        <div className='flow-buttons'>
        <div className='flow-card-previous'>
        <Link to={`/rules/filtering`}>
            <button>
              Previous
            </button>
          </Link>
        </div>

        <div className='flow-card-next'>
        <Link to={`/dashboard`}>
            <input
              type="submit"
              value="See Results!">
            </input>
          </Link>
        </div>
        </div>

      </form>
    </div>
  </div>
  )
}

export default SongOrderRules


