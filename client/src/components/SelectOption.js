import React, { Children } from 'react'
import { Link } from "react-router-dom"

function SelectOption({ children, handleSelect, selectedOption, value, label }) {
    function handleClick() {
        handleSelect(value)
    }
    function isSelected() {
        return selectedOption == value
    }
    return (<button value={value} className={`content-block content-block-tertiary content-block-select-option ${isSelected() ? 'content-block-select-option-selected' : ''}`} onClick={handleClick}>
        <h4>{label}</h4>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507' className='select-option-image'></img>
    </button>
    )
}

export default SelectOption