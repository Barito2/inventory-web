import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { findAll, removeById } from '../../actions/item'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import { Container, Paginate, successComponent, AddComponent, ReloadComponent } from "../../components";
import ItemTable from "./ItemTable";

function ItemRow({ index, data, onDeleted }) {
    return (
        <tr>
            <td style={{ width: "5%" }}> {Number(index) + 1} </td>
            <td> {data.name} </td>
            <td> {data.price} </td>
            <td>
                <Link className="btn btn-warning mr-2" to={`/item/${data.id}/edit`}> Edit </Link>
                <button onClick={onDeleted} className="btn btn-danger"> Delete </button>
            </td>
        </tr>
    )
}

function ItemList({
    items, isLoading, isRemoved, error
    , findAll, removeById
    , savedItem
}) {

    // const [activePage, setActivePage] = useState(1)

    // const onReloadWithpage = (page) => {
    //     findAll({
    //         page: page
    //     })
    // }

    const onReloadPage = () => {
        findAll()
    }

    const onDelete = (id) => {
        removeById(id)
    }

    const validationDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover data id: " + id,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    onDelete(id)
                } else {
                    swal("Cancel deleted!");
                }
            });
    }

    // const handlePageChange = (pageNumber) => {
    //     setActivePage(pageNumber);
    //     onReloadWithpage(pageNumber - 1)
    // }

    useEffect(() => {
        onReloadPage()
    }, [])

    useEffect(() => {
        if (savedItem) {
            successComponent()
        }
    }, [savedItem])


    useEffect(() => {
        if (isRemoved) {
            successComponent()
            onReloadPage()
        }
    }, [error, isRemoved, findAll])


    return (
        <Container error={error}>
            <div className="mt-3">
                <h1>
                    Item List
                </h1>

                <ItemTable items={items} onDeleted={validationDelete} isLoading={isLoading} onReload={onReloadPage} />
            </div>
        </Container >
    )
}

const mapStateToProps = (state) => {
    return {
        isRemoved: state.removeItemById.data,
        items: state.findAllItem.data || [],
        savedItem: state.saveItem.data,
        isLoading: state.findAllItem.isLoading || state.removeItemById.loading,
        error: state.findAllItem.error || state.removeItemById.error,
    }
}


const mapDispatchToProps = { findAll, removeById }

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
