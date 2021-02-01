import React, { useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { findAll, removeById } from '../../actions/unit'
import swal from 'sweetalert';
import Container from "../../components/Container";


function UnitRow({ index, data, onDeleted }) {
    return (
        <tr>
            <td style={{ width: "5%" }}> {Number(index) + 1} </td>
            <td> {data.code} </td>
            <td> {data.description} </td>
            <td>
                <Link className="btn btn-warning mr-2" to={`/unit/${data.id}/edit`} > Edit </Link>

                <button onClick={onDeleted} className="btn btn-danger"> Delete </button>
            </td>
        </tr>
    )
}

function UnitList({
    units, isLoading, isRemoved, error
    , findAll, removeById
    , savedUnit
}) {

    const onReload = () => {
        findAll()
    }

    const onDelete = (id) => {
        removeById(id)
    }

    const onSuccess = () => {
        swal("Good job!", "You clicked the button!", "success");
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
                    <UnitRow onDeleted={onDelete(id)} />
                    onSuccess()
                } else {
                    swal("Cancel deleted!");
                }
            });
    }

    useEffect(() => {
        findAll()
    }, [])

    useEffect(() => {
        if (savedUnit) {
            onSuccess()
        }
    }, [savedUnit])

    useEffect(() => {
        if (isRemoved) {
            onReload()
            onSuccess()
        }
    }, [isRemoved, findAll])

    return (
        <Container error={error}>
            <div className="mt-3">
                <h3>
                    Unit List
                    <Link to={`unit/add`} className="btn btn-success ml-2">+</Link>
                    <Button onClick={onReload} className="btn btn-primary float-right mr-2">Reload</Button>
                </h3>

                <Table striped bordered hover>
                    <thead>
                        <tr className="bg-dark text-white">
                            <th>#</th>
                            <th>Code</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !isLoading ?
                                units.map((e, i) => {
                                    return (
                                        <UnitRow data={e} index={[i]} onDeleted={() => validationDelete(e.id)} />
                                    )
                                }) :
                                <tr>
                                    <td colSpan="4" className="text-center"> Loading..</td>
                                </tr>
                        }
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        isRemoved: state.removeUnitById,
        units: state.findAllUnit.data || [],
        savedUnit: state.saveUnit.data,
        isLoading: state.findAllUnit.isLoading || state.removeUnitById.loading,
        error: state.findAllUnit.error || state.removeUnitById.error,
    }
}


const mapDispatchToProps = { findAll, removeById }

export default connect(mapStateToProps, mapDispatchToProps)(UnitList)
