import React, { useState } from 'react'
import { Link } from "react-router-dom"

function SongOrderRules() {

  function handleSongOrderSubmit() {
  }

  return (
    <div className='content-block content-block-primary content-block-flow'>
      <h2 className='flow-header'>Almost done! How do you want to order the songs in your playlists?</h2>
      <form
        className='flow-form'
        onSubmit={handleSongOrderSubmit}>
        <div>
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
        </div>

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


