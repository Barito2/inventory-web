import { put, takeLatest } from "redux-saga/effects"
import {
    FIND_ALL_ITEM, FIND_ALL_ITEM_FAILURE, FIND_ALL_ITEM_SUCCESS,
    FIND_ITEM_BY_ID, FIND_ITEM_BY_ID_FAILURE, FIND_ITEM_BY_ID_SUCCESS,
    REMOVE_ITEM_BY_ID, REMOVE_ITEM_BY_ID_FAILURE, REMOVE_ITEM_BY_ID_SUCCESS,
    SAVE_ITEM, SAVE_ITEM_FAILURE, SAVE_ITEM_SUCCESS,
    UPLOAD_ITEM_BY_ID, UPLOAD_ITEM_BY_ID_FAILURE, UPLOAD_ITEM_BY_ID_SUCCESS
} from "../constants/action";
import axios from "../configs/api"

function* findAllItem(action) {
    let uri = `/items?`
    if (action.action) {
        uri += `page=${action.action.page}`
    }
    let result = yield axios.get(uri)
        .then(data => {
            return ({
                type: FIND_ALL_ITEM_SUCCESS,
                data: data.list
            })
        })
        .catch(err => {
            return ({
                type: FIND_ALL_ITEM_FAILURE,
                error: err
            })
        })
    yield put(result)
}

function* findItemById(action) {
    let result = yield axios.get(`/items/${action.id}`)
        .then(data => {
            console.log("adaw")
            return ({
                type: FIND_ITEM_BY_ID_SUCCESS,
                data: data
            })
        })
        .catch(err => {
            return ({
                type: FIND_ITEM_BY_ID_FAILURE,
                error: err
            })
        })
    yield put(result)
}

function* uploadItem(action) {
    let model = action.model;
    let method = 'POST', url = `/items/${action.id}/image`;

    let result = yield axios({
        url: url,
        method: method,
        data: model
    })
        .then(data => {
            return {
                type: UPLOAD_ITEM_BY_ID_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return {
                type: UPLOAD_ITEM_BY_ID_FAILURE,
                error: e
            }
        })

    yield put(result)
}

function* saveItem(action) {
    let model = action.model;
    let method = 'POST', url = '/items';
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
                type: SAVE_ITEM_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return {
                type: SAVE_ITEM_FAILURE,
                error: e
            }
        })

    yield put(result)
}

function* removeItemById(action) {
    let result = yield axios.delete(`/items/${action.id}`)
        .then(data => {
            return ({
                type: REMOVE_ITEM_BY_ID_SUCCESS,
                data: data.list
            })
        })
        .catch(err => {
            return ({
                type: REMOVE_ITEM_BY_ID_FAILURE,
                error: err
            })
        })
    yield put(result)
}



export function* watchFindAllItem() {
    yield takeLatest(FIND_ALL_ITEM, findAllItem)
}

export function* watchFindItemById() {
    yield takeLatest(FIND_ITEM_BY_ID, findItemById)
}

export function* watchSaveItem() {
    yield takeLatest(SAVE_ITEM, saveItem)
}

export function* watchUploadItem() {
    yield takeLatest(UPLOAD_ITEM_BY_ID, uploadItem)
}

export function* watchRemoveItemByid() {
    yield takeLatest(REMOVE_ITEM_BY_ID, removeItemById)
}