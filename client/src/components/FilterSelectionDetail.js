import React from 'react'

function FilterSelectionDetail({filter}) {

  return (

    <div className='selection-field-value'>
        {filter.value}: {filter.selected_options[0]} {filter.selected_options[1]} {filter.selected_options[2]}
    </div>
  )
}

export default FilterSelectionDetail