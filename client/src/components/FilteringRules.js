import React from 'react'
import { Link } from "react-router-dom"


function FilteringRules() {
  return (
    <div className='flow-card'>
      <h2 className='flow-card-title'>What songs do you want to include in the playlists?</h2>

      <div className='flow-card-choices-container'>
        <p>Only include the following songs:</p>

        <form className='flow-card-form'>
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

          <div className='flow-buttons'>
          <div className='flow-card-previous'>
            <Link to={`/rules/grouping`}>
              <button>
                Previous
              </button>
            </Link>
          </div>

          <div className='flow-card-next'>
            <Link to={`/rules/songorder`}>
              <input
                // onSubmit={handleFilteringSubmit}
                type="submit"
                value="Next">
              </input>
            </Link>
          </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default FilteringRules