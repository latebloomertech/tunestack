import React from 'react'
import { Link } from "react-router-dom"


function GroupingRules({handleGroupingSubmit}) {
    return (
        <div className='flow-card'>
            <h2 className='flow-card-title'>How do you want to group your new playlists?</h2>

            <div className='flow-card-choices-container'>
            <p>Group my songs into playlists according to:</p>

                <form className='flow-card-form'>
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

                    <div className='flow-card-next'>
                    <Link to={`/rules/filtering`}>
                    <input
                        onSubmit={handleGroupingSubmit}
                        type="submit"
                        value="Next">
                    </input>
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default GroupingRules