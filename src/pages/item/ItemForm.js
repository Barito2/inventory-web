import React, { useState, useEffect } from 'react'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import { findById, save } from "../../actions/item"
import { findAll as allUnit } from "../../actions/unit"
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux';
import { BackComponent } from "../../components";

const ItemForm = ({
    isLoading, item, units, savedItem,
    findById, save, allUnit
}) => {

    const { id } = useParams();
    const [data, setData] = useState({})
    const [redirect] = useState(false)
    const history = useHistory();

    console.log(data);

    const reloadUnit = (id) => {
        findById(parseInt(id))
        allUnit()
    }

    useEffect(() => {
        reloadUnit()
    }, [])

    useEffect(() => {
        if (id) {
            reloadUnit(id)
        }
    }, [id, findById])

    useEffect(() => {
        //check if there is id and Item; if id exist then Item must also exist
        if (id && item) {
            setData({
                ...item
            })

        }
    }, [id, item])

    useEffect(() => {
        if (savedItem) {
            history.push('/items')
        }

    }, [savedItem, history])

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
        return (<Redirect to="/items" />)
    }

    return (
        <div className="mt-5 center">
            <div className="card p-4 shadow">
                <h3 className="text-center mb-5">
                    {data?.id ? 'Edit' : 'add'} Item
                        <BackComponent url="/items" />
                </h3>
                {!isLoading ?
                    <Form Form onSubmit={handleSubmit}>

                        <input onChange={handleChange} type="text" value={data?.id || ''} name="id" hidden={true} />

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={handleChange} type="text" placeholder="name" name="name" value={data?.name || ""} required={true} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Price</Form.Label>
                            <Form.Control onChange={handleChange} type="number" placeholder="price" name="price" value={data?.price || ""} required={true} />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Unit</Form.Label>
                            <Form.Control as="select" name="unitId" onChange={handleChange} required={true}>
                                <option >-- Choose --</option>
                                {
                                    units.map((e, i) => (
                                        <option value={e.id} selected={e.id === data?.unit?.id || false} >{e.code}</option>
                                    ))
                                }
                            </Form.Control>
                        </Form.Group>

                        <input type="submit" className="btn btn-success mr-2" value={data?.id ? 'Update' : 'Submit'} />
                        <button className="btn btn-primary" onClick={reloadUnit}>Reload</button>
                    </Form>
                    : <div>Loading ...</div>}
            </div>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        // call reducer
        item: state.findItemById.data,
        units: state.findAllUnit.data || [],
        isLoading: state.findItemById.isLoading,
        savedItem: state.saveItem.data,
        error: state.findItemById.error,
    }
}

const mapDispatchToProps = { findById, save, allUnit } //call action


export default connect(mapStateToProps, mapDispatchToProps)(ItemForm)
