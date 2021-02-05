import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

const EditComponent = (props) => {
    return (
        <Link to={props.url} className="btn btn-warning mr-2 inline-block"><FontAwesomeIcon icon={faPencilAlt} /> Edit</Link>

    )
}

export default EditComponent
