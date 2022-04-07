import React from 'react'
import { Link } from "react-router-dom"


function FilteringRules() {
  return (
    <div>FilteringRules
         <Link to={`/rules/grouping`}>
                <button>
                    Previous
                </button>
            </Link>
            <Link to={`/rules/songorder`}>
                <button>
                    Next
                </button>
            </Link>
    </div>
  )
}

export default FilteringRules