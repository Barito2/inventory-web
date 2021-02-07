import React, { useState, useEffect } from 'react'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import { findById, save } from "../../actions/stock"
import { findAll as allItem } from "../../actions/item"
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux';
import { BackComponent } from "../../components";

const StockForm = ({
    isLoading, stock, items, savedStock,
    findById, save, allItem
}) => {

    const { id } = useParams();
    const [data, setData] = useState({})
    const [redirect] = useState(false)
    const history = useHistory();

    const reloadItem = (id) => {
        findById(parseInt(id))
        allItem()
    }

    useEffect(() => {
        reloadItem()
    }, [])

    useEffect(() => {
        if (id) {
            reloadItem(id)
        }
    }, [id, findById])

    useEffect(() => {
        //check if there is id and Item; if id exist then Item must also exist
        if (id && stock) {
            setData({
                ...stock
            })

        }
    }, [id, stock])

    useEffect(() => {
        if (savedStock) {
            history.push('/stocks')
        }

    }, [savedStock, history])

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
        return (<Redirect to="/stocks" />)
    }


    return (
        <div className="mt-5 center">
            <div className="card p-4 shadow">
                <h3 className="text-center mb-5">
                    {data?.id ? 'Edit' : 'add'} Item
                            <BackComponent url="/stocks" />
                </h3>
                {!isLoading ?
                    <Form Form onSubmit={handleSubmit}>

                        <input onChange={handleChange} type="text" value={data?.id || ''} name="id" hidden={true} />

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control onChange={handleChange} type="number" placeholder="quantity" name="quantity" value={data?.quantity || ""} required={true} />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Item</Form.Label>
                            <Form.Control as="select" name="itemId" onChange={handleChange} required={true}>
                                <option >-- Choose --</option>
                                {
                                    items.map((e, i) => {
                                        return (
                                            <option value={e.id} selected={e.id === data?.item?.id || false} >{e.name}</option>
                                        )
                                    })
                                }
                            </Form.Control>
                        </Form.Group>

                        <input type="submit" className="btn btn-success mr-2" value={data?.id ? 'Update' : 'Submit'} />
                        <button className="btn btn-primary" onClick={reloadItem}>Reload</button>
                    </Form>
                    : <div>Loading ...</div>}
            </div>
        </div >
    )

}

const mapStateToProps = (state) => {
    return {
        // call reducer
        stock: state.findStockById.data,
        items: state.findAllItem.data || [],
        isLoading: state.findStockById.isLoading,
        savedStock: state.saveStock.data,
        error: state.findStockById.error,
    }
}

const mapDispatchToProps = { findById, save, allItem } //call action


export default connect(mapStateToProps, mapDispatchToProps)(StockForm)
