import { FIND_ALL_STOCK, FIND_STOCK_BY_ID, SAVE_STOCK, REMOVE_STOCK_BY_ID } from "../constants/action"

export function findAll(action) {

    return {
        type: FIND_ALL_STOCK,
        action
    }
}

export function findById(id) {
    return {
        type: FIND_STOCK_BY_ID,
        id
    }
}

export function save(model) {
    return {
        type: SAVE_STOCK,
        model
    }
}

export function removeById(id) {
    return {
        type: REMOVE_STOCK_BY_ID,
        id
    }
}
