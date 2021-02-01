import { combineReducers } from "redux"
import { findAllUnit, findUnitById, saveUnit, removeUnitById } from "./unit"

const rootReducer = combineReducers({
    findAllUnit,
    findUnitById,
    saveUnit,
    removeUnitById
})

export default rootReducer