import React from 'react'
import { Link } from "react-router-dom"


function GroupingRules({ handleGroupingSubmit }) {
    return (
        <div className='content-block content-block-primary content-block-flow' >
            <h2 className='flow-header'>How do you want to group your new playlists?</h2>

            <form className='flow-form'>
                <div>
                    <p>Group my songs into playlists according to:</p>
                    <div className='radio'>
                        <input
                            type="radio"
                            name="groupingRule"
                            value="GroupYear" />
                        <label> The year I saved the song</label>
                    </div>

                    <div className='radio'>
                        <input
                            type="radio"
                            name="groupingRule"
                            value="GroupMonth" />
                        <label> The month I saved the song</label>
                    </div>

                    <div className='radio'>
                        <input
                            type="radio"
                            name="groupingRule"
                            value="GroupWeek" />
                        <label> The week I saved the song </label>
                    </div>

                    <div className='radio'>
                        <input
                            type="radio"
                            name="groupingRule"
                            value="GroupEnergy" />
                        <label> The energy level of the song</label>
                    </div>

                    <div className='radio'>
                        <input
                            type="radio"
                            name="groupingRule"
                            value="GroupInstrumentalness" />
                        <label> The instrumentalness of the song</label>
                    </div>

                    <div className='radio'>
                        <input
                            type="radio"
                            name="groupingRule"
                            value="GroupPopularity" />
                        <label>The popularity of the song</label>
                    </div>
                </div>

                <Link to={`/rules/filtering`} className="flow-next-link" >
                    <input
                        onSubmit={handleGroupingSubmit}
                        type="submit"
                        value="Next"
                        className='button button-primary flow-next-button'>
                    </input>
                </Link>
            </form>
        </div>
    )
}

export default GroupingRules