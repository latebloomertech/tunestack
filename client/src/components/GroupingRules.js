import React from 'react'
import { Link } from "react-router-dom"


function GroupingRules() {
    return (
        <div>GroupingRules
            <Link to={`/rules/filtering`}>
                <button>
                    Next
                </button>
            </Link>
        </div>
    )
}

export default GroupingRules