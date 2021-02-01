import { FIND_ALL_UNIT, FIND_UNIT_BY_ID, SAVE_UNIT, REMOVE_UNIT_BY_ID } from "../constants/action"

export function findAll() {
    return {
        type: FIND_ALL_UNIT
    }
}

export function findById(id) {
    return {
        type: FIND_UNIT_BY_ID,
        id
    }
}

export function save(model) {
    return {
        type: SAVE_UNIT,
        model
    }
}

export function removeById(id) {
    return {
        type: REMOVE_UNIT_BY_ID,
        id
    }
}
