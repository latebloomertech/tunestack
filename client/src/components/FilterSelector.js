import React, { useState } from 'react'
import SelectOption from './SelectOption'

function FilterSelector({ value, label, image, options, handleFilterSelect, filterSelection }) {

    const [selectedOptions, setSelectedOptions] = useState(filterSelection.filter(f => f.value == value)[0].selected_options)

    function handleSelect(selectedValue) {
        let newSelectedOptions = {...selectedOptions}
        if (selectedOptions[selectedValue]) {
            newSelectedOptions[selectedValue] = false
        } else {
            newSelectedOptions[selectedValue] = true
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
                        selected={selectedOptions[value]}
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