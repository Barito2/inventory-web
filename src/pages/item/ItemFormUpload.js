import React, { useState, useEffect } from 'react'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import { findById, upload } from "../../actions/item"
import { findAll as allUnit } from "../../actions/unit"
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux';
import { BackComponent } from "../../components";

const ItemFormUpload = ({
    isLoading, item, units, savedItem,
    findById, upload, allUnit
}) => {

    const { id } = useParams();
    const [data, setData] = useState({})
    const [redirect] = useState(false)
    const history = useHistory();

    const uploadFile = (id) => {
        upload({
            action: id
        })
    }

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
        uploadFile()
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
                <Form Form onSubmit={handleSubmit} encType="multipart/form-data">

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={handleChange} type="file" placeholder="name" name="imageUrl" required={true} />
                    </Form.Group>

                    <input type="submit" className="btn btn-success mr-2" value={'Submit'} />
                </Form>
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
        savedItem: state.uploadItem.data,
        error: state.findItemById.error,
    }
}

const mapDispatchToProps = { findById, upload, allUnit } //call action


export default connect(mapStateToProps, mapDispatchToProps)(ItemFormUpload)
