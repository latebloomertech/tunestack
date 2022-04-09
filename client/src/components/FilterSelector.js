import React, { useState } from 'react'
import SelectOption from './SelectOption'

function FilterSelector({ value, label, image, options }) {
    const [selectedOptions, setSelectedOptions] = useState(options.map(option => option.value))

    function handleSelect(value) {
        let newSelectedOptions = [].concat(selectedOptions)
        if (selectedOptions.includes(value)) {
            newSelectedOptions.splice(selectedOptions.indexOf(value), 1)
        } else {
            newSelectedOptions.push(value)
        }
        setSelectedOptions(newSelectedOptions)
    }
    return (
        <div >
            <h4>{label}</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1em'    }}>
                {options.map(({ value, label, image }) => {
                    return <SelectOption
                        key={value}
                        selected={selectedOptions.includes(value)}
                        handleSelect={handleSelect}
                        value={value}
                        label={label}
                        image={image}>
                    </SelectOption>
                })}
            </div>
        </div>
    )
}

export default FilterSelector