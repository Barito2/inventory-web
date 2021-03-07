import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const DeleteComponent = (props) => {
    return (
        <button onClick={() => props.onDeleted(props.id)} className="btn btn-danger inline-block mr-2" > <FontAwesomeIcon icon={faTrashAlt} /> Delete </button >
    )
}

export default DeleteComponent
