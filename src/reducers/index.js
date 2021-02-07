import { combineReducers } from "redux"
import { findAllUnit, findUnitById, saveUnit, removeUnitById } from "./unit"
import { findAllItem, findItemById, saveItem, removeItemById } from "./item"
import { findAllStock, findStockById, saveStock, removeStockById } from "./stock"

const rootReducer = combineReducers({
    findAllUnit,
    findUnitById,
    saveUnit,
    removeUnitById,
    findAllItem,
    findItemById,
    saveItem,
    removeItemById,
    findAllStock,
    findStockById,
    saveStock,
    removeStockById
})

export default rootReducer