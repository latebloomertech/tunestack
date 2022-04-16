import React, { useState } from 'react'
import SelectOption from './SelectOption'

function FilterSelector({ value, label, image, options, handleFilterSelect, filterSelection }) {
    const [selectedOptions, setSelectedOptions] = useState(options.map(option => option.value))


    function handleSelect(selectedValue) {
        let newSelectedOptions = [].concat(selectedOptions)
        if (selectedOptions.includes(selectedValue)) {
            newSelectedOptions.splice(selectedOptions.indexOf(selectedValue), 1)
        } else {
            newSelectedOptions.push(selectedValue)
        }
        setSelectedOptions(newSelectedOptions)
        handleFilterSelect(value, newSelectedOptions)
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