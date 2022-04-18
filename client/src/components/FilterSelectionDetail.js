import React from 'react'

function FilterSelectionDetail({ filter }) {
  // const selected_options = filter.selected_options
  let show_filter = false
  let filtered_options = []

  for (const [option, value] of Object.entries(filter.selected_options)) {
    if (!value) { filtered_options.push(option) }
  }

  if (filtered_options.length > 0) { show_filter = true }

  return (
    <>
      {show_filter ?
        <div className='selection-field-value'>
          {filter.value}: {filtered_options}
        </div>
        : <></>
      }
    </>
  )
}

export default FilterSelectionDetail