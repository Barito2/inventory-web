import React, { useState, useEffect } from 'react'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import { findById, save } from "../../actions/unit"
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux';

const UnitForm = ({
    isLoading, unit, savedUnit,
    findById, save }
) => {

    const { id } = useParams();
    const [data, setData] = useState({})
    const [redirect] = useState(false)
    const history = useHistory();

    useEffect(() => {
        if (id) {
            findById(parseInt(id))
        }

    }, [id, findById])

    useEffect(() => {
        //check if there is id and unit; if id exist then unit must also exist
        if (id && unit) {
            setData({
                ...unit
            })
        }
    }, [id, unit])

    useEffect(() => {
        if (savedUnit) {
            history.push('/units')
        }

    }, [savedUnit, history])

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        save(data)
    }

    if (redirect === true) {
        return (<Redirect to="/units" />)
    }


    return (
        <div className="mt-5 center">
            <div className="card p-4 shadow">
                <h3 className="text-center mb-5">
                    {data?.id ? 'Edit' : 'add'} Unit
                    <Link to="/units" className="btn btn-secondary float-right">Back</Link>
                </h3>
                {!isLoading ?
                    <Form onSubmit={handleSubmit}>

                        <input onChange={handleChange} type="text" value={data?.id || ''} name="id" hidden={true} />

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Code</Form.Label>
                            <Form.Control onChange={handleChange} type="text" placeholder="code" name="code" value={data?.code || ""} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={handleChange} type="text" placeholder="description" name="description" value={data?.description || ""} />
                        </Form.Group>

                        <input type="submit" className="btn btn-primary" value={data?.id ? 'Update' : 'Submit'} />
                    </Form>
                    : <div>Loading ...</div>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // call reducer
        unit: state.findUnitById.data,
        isLoading: state.findUnitById.isLoading,
        savedUnit: state.saveUnit.data,
        error: state.findUnitById.error,
    }
}

const mapDispatchToProps = { findById, save } //call action


export default connect(mapStateToProps, mapDispatchToProps)(UnitForm)
