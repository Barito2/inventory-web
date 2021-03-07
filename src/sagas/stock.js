import { put, takeLatest } from "redux-saga/effects"
import {
    FIND_ALL_STOCK, FIND_ALL_STOCK_FAILURE, FIND_ALL_STOCK_SUCCESS,
    FIND_STOCK_BY_ID, FIND_STOCK_BY_ID_FAILURE, FIND_STOCK_BY_ID_SUCCESS,
    REMOVE_STOCK_BY_ID, REMOVE_STOCK_BY_ID_FAILURE, REMOVE_STOCK_BY_ID_SUCCESS,
    SAVE_STOCK, SAVE_STOCK_FAILURE, SAVE_STOCK_SUCCESS,
} from "../constants/action";
import axios from "../configs/api"

function* findAllStock(action) {
    let uri = `/stocks?`
    if (action.action) {
        uri += `page=${action.action.page}`
    }
    let result = yield axios.get('/stocks')
        .then(data => {
            return ({
                type: FIND_ALL_STOCK_SUCCESS,
                data: data.list
            })
        })
        .catch(err => {
            return ({
                type: FIND_ALL_STOCK_FAILURE,
                error: err
            })
        })
    yield put(result)
}

function* findStockById(action) {
    let result = yield axios.get(`/stocks/${action.id}`)
        .then(data => {
            console.log("adaw")
            return ({
                type: FIND_STOCK_BY_ID_SUCCESS,
                data: data
            })
        })
        .catch(err => {
            return ({
                type: FIND_STOCK_BY_ID_FAILURE,
                error: err
            })
        })
    yield put(result)
}

function* saveStock(action) {
    let model = action.model;
    let method = 'POST', url = '/stocks';
    if (model.id) {
        method = "PUT";
        url += `/${model.id}`
    }

    let result = yield axios({
        url: url,
        method: method,
        data: model
    })
        .then(data => {
            return {
                type: SAVE_STOCK_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return {
                type: SAVE_STOCK_FAILURE,
                error: e
            }
        })

    yield put(result)
}

function* removeStockById(action) {
    let result = yield axios.delete(`/stocks/${action.id}`)
        .then(data => {
            return ({
                type: REMOVE_STOCK_BY_ID_SUCCESS,
                data: data.list
            })
        })
        .catch(err => {
            return ({
                type: REMOVE_STOCK_BY_ID_FAILURE,
                error: err
            })
        })
    yield put(result)
}



export function* watchFindAllStock() {
    yield takeLatest(FIND_ALL_STOCK, findAllStock)
}

export function* watchFindStockById() {
    yield takeLatest(FIND_STOCK_BY_ID, findStockById)
}

export function* watchSaveStock() {
    yield takeLatest(SAVE_STOCK, saveStock)
}

export function* watchRemoveStockByid() {
    yield takeLatest(REMOVE_STOCK_BY_ID, removeStockById)
}