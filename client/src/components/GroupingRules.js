import React, { useState } from 'react'
import { Link } from "react-router-dom"
import SelectOption from './SelectOption'

const options = [
    {
        value: 'year',
        label: 'The year I saved the song'
    }, {
        value: 'quarter',
        label: 'The quarter I saved the song'
    }, {
        value: 'month',
        label: 'The month I saved the song'
    }, {
        value: 'energy',
        label: 'The energy level of the song'
    }, {
        value: 'instrumentalness',
        label: 'The instrumentalness of the song'
    }, {
        value: 'popularity',
        label: 'The popularity of the song'
    },

]


function GroupingRules({ handleGroupingSubmit }) {

    const [selectedOption, setSelectedOption] = useState(null)

    function handleSelect(value) {
        setSelectedOption(value)
    }
    return (
        <div className='content-block content-block-primary content-block-flow' >
            <h2 className='flow-header'>How do you want to group your new playlists?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1em', marginBottom: '1em' }}>
                {options.map(({ value, label }) => {
                    return <SelectOption
                        key={value}
                        selectedOption={selectedOption}
                        handleSelect={handleSelect}
                        value={value}
                        label={label}>
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