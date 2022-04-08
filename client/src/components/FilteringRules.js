import React from 'react'
import { Link } from "react-router-dom"


function FilteringRules() {
  return (
    <div className='content-block content-block-primary content-block-flow'>
      <h2 className='flow-header'>What songs do you want to include in the playlists?</h2>

      <form className='flow-form'>
        <div>
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
          </div>

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