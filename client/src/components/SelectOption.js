import React, { Children } from 'react'
import { Link } from "react-router-dom"

function SelectOption({ handleSelect, selected, value, label, image }) {
    function handleClick() {
        handleSelect(value)
    }

    return (<button value={value}
        className={`content-block content-block-tertiary content-block-select-option ${selected ? 'content-block-select-option-selected' : ''}`}
        onClick={handleClick}>
        {console.log(selected)}
        <h4>{label}</h4>
        <img src={image} className='select-option-image'></img>
    </button>
    )
}

export default SelectOption