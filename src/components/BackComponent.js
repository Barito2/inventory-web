import React from 'react'
import { Link } from 'react-router-dom'

const BackComponent = (props) => {
    return (
        <div>
            <Link to={props.url} className="btn btn-secondary float-right">Back</Link>
        </div>
    )
}

export default BackComponent
