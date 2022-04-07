import React from 'react'
import { Link } from "react-router-dom"


function SongOrderRules() {
  return (
    <div>SongOrderRules
         <Link to={`/rules/filtering`}>
                <button>
                    Previous
                </button>
            </Link>
            <Link to={`/dashboard`}>
                <button>
                    See Results!
                </button>
            </Link>
    </div>
  )
}

export default SongOrderRules