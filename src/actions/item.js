import { FIND_ALL_ITEM, FIND_ITEM_BY_ID, SAVE_ITEM, REMOVE_ITEM_BY_ID } from "../constants/action"

export function findAll(action) {

    return {
        type: FIND_ALL_ITEM,
        action
    }
}

export function findById(id) {
    return {
        type: FIND_ITEM_BY_ID,
        id
    }
}

export function save(model) {
    console.log("save item");
    return {
        type: SAVE_ITEM,
        model
    }
}

export function removeById(id) {
    return {
        type: REMOVE_ITEM_BY_ID,
        id
    }
}
