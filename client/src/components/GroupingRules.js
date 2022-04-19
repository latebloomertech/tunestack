import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {grouping_options} from '../settings/grouping_settings'
import SelectOption from './SelectOption'

const options = grouping_options

function GroupingRules({ handleGroupingSelect, groupingSelection}) {

    const [selectedOption, setSelectedOption] = useState(groupingSelection ? groupingSelection : options[0].value)

    // (options[0].value)

    function handleSelect(value) {
        setSelectedOption(value)
        handleGroupingSelect(value)
    }

    return (
        <div className='content-block content-block-primary content-block-flow' >
            <h2 className='flow-header'>How do you want to group your new playlists?</h2>
            <div className='subtitle'>Select an option below to group the songs according to that attribute:</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1em', marginBottom: '2em', width: '100%' }}>
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

            {/* <h2>{selectedOption}</h2> */}

            <form className='flow-form'>
                {/* <div>
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
                </div> */}

                <Link to={`/rules/filtering`} className="flow-next-link" >
                    <input
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