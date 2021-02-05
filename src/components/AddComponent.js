import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const AddComponent = (props) => {
    return (
        <Link to={props.url} className="btn btn-success mr-2"><FontAwesomeIcon icon={faPlusSquare} /> Add</Link>
    )
}

export default AddComponent
