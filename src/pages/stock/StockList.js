import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { findAll, removeById } from '../../actions/stock'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import { Container, successComponent, AddComponent, ReloadComponent } from "../../components";
import StockTable from "./StockTable";
// import UnitTable from "./UnitTable";

const StockList = ({
    stocks, isLoading, isRemoved, error
    , findAll, removeById
    , savedStock
}) => {

    console.log("stock: " + stocks);

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
        if (savedStock) {
            successComponent()
        }
    }, [savedStock])

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
                    Stock List
                </h1>

                <StockTable stocks={stocks} stockItem={stocks.item} isLoading={isLoading} onDeleted={validationDelete} onReload={onReloadPage} />
            </div>
        </Container >
    )
}

const mapStateToProps = (state) => {
    return {
        isRemoved: state.removeStockById.data,
        stocks: state.findAllStock.data || [],
        savedStock: state.saveStock.data,
        isLoading: state.findAllStock.isLoading || state.removeStockById.loading,
        error: state.findAllStock.error || state.removeStockById.error,
    }
}


const mapDispatchToProps = { findAll, removeById }

export default connect(mapStateToProps, mapDispatchToProps)(StockList)
