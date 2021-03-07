import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { findAll, removeById } from '../../actions/unit'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import { Container, successComponent, AddComponent, ReloadComponent } from "../../components";
import UnitTable from "./UnitTable";


function UnitList({
    units, isLoading, isRemoved, error
    , findAll, removeById
    , savedUnit
}) {
    console.log(units);

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

    useEffect(() => {
        onReloadPage()
    }, [])

    useEffect(() => {
        if (savedUnit) {
            successComponent()
        }
    }, [savedUnit])

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
                    Unit List
                </h1>

                <UnitTable units={units} onDeleted={validationDelete} isLoading={isLoading} onReload={onReloadPage} />
            </div>
        </Container >
    )
}

const mapStateToProps = (state) => {
    return {
        isRemoved: state.removeUnitById.data,
        units: state.findAllUnit.data || [],
        savedUnit: state.saveUnit.data,
        isLoading: state.findAllUnit.isLoading || state.removeUnitById.loading,
        error: state.findAllUnit.error || state.removeUnitById.error,
    }
}


const mapDispatchToProps = { findAll, removeById }

export default connect(mapStateToProps, mapDispatchToProps)(UnitList)
