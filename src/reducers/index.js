import { combineReducers } from "redux"
import { findAllUnit, findUnitById, saveUnit, removeUnitById } from "./unit"
import { findAllItem, findItemById, saveItem, removeItemById } from "./item"

const rootReducer = combineReducers({
    findAllUnit,
    findUnitById,
    saveUnit,
    removeUnitById,
    findAllItem,
    findItemById,
    saveItem,
    removeItemById
})

export default rootReducer