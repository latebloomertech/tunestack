import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {grouping_options} from '../settings/grouping_settings'
import SelectOption from './SelectOption'

const options = grouping_options

function GroupingRules({ handleGroupingSelect, groupingSelection}) {

    const [selectedOption, setSelectedOption] = useState(groupingSelection ? groupingSelection : options[0].value)


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

            <form className='flow-form'>

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