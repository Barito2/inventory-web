import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

const ReloadComponent = (props) => {
    return (
        <Button onClick={props.onReload} className="btn btn-primary"><FontAwesomeIcon icon={faSyncAlt} /> Refresh</Button>
    )
}

export default ReloadComponent
