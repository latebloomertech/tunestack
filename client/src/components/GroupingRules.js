import React from 'react'
import { Link } from "react-router-dom"


function GroupingRules() {
    return (
        <div className='flow-card'>
            <h2 className='flow-card-title'>How do you want to group your new playlists?</h2>


            <div className='flow-card-choices-container'>
            <p>Group my songs into playlists according to:</p>

                <form className='flow-card-form'>
                    <div className='radio'>
                        <input
                            type="radio"
                            id="testID"
                            name="testName"
                            value="placeholder" />
                        <label> The year I saved the song</label>
                    </div>

                    <div className='radio'>
                    <input
                        type="radio"
                        id="testID"
                        name="testName"
                        value="placeholder" />
                    <label> The month I saved the song</label>
                    </div>

                    <div className='radio'>
                    <input
                        type="radio"
                        id="testID"
                        name="testName"
                        value="placeholder" />
                    <label> The week I saved the song </label>
                    </div>

                    <div className='radio'>
                    <input
                        type="radio"
                        id="testID"
                        name="testName"
                        value="placeholder" />
                    <label> The energy level of the song</label>
                    </div>

                    <div className='radio'>
                    <input
                        type="radio"
                        id="testID"
                        name="testName"
                        value="placeholder" />
                    <label> The instrumentalness of the song</label>
                    </div>

                    <div className='radio'>
                    <input
                        type="radio"
                        id="testID"
                        name="testName"
                        value="placeholder" />
                    <label>The popularity of the song</label>
                    </div>

                </form>
            </div>



            {/* <br></br> */}
            <div className='flow-card-next'>
            <Link to={`/rules/filtering`}>
                <button className='flow-card-button'>
                    Next
                </button>
            </Link>
            </div>

        </div>
    )
}

export default GroupingRules