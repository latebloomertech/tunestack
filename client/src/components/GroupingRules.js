import React, { useState } from 'react'
import { Link } from "react-router-dom"
import SelectOption from './SelectOption'

const options = [
    {
        value: 'year',
        label: 'The year I saved the song',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    }, {
        value: 'quarter',
        label: 'The quarter I saved the song',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    }, {
        value: 'month',
        label: 'The month I saved the song',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    }, {
        value: 'energy',
        label: 'The energy level of the song',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    }, {
        value: 'instrumentalness',
        label: 'The instrumentalness of the song',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    }, {
        value: 'popularity',
        label: 'The popularity of the song',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    },

]


function GroupingRules({ handleGroupingSubmit }) {

    const [selectedOption, setSelectedOption] = useState(options[0].value)

    function handleSelect(value) {
        setSelectedOption(value)
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