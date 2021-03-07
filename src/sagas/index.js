import { all } from "redux-saga/effects";
import { watchFindAllUnit, watchFindUnitById, watchSaveUnit, watchRemoveByid } from "./unit";
import { watchFindAllItem, watchFindItemById, watchSaveItem, watchRemoveItemByid, watchUploadItem } from "./item";
import { watchFindAllStock, watchFindStockById, watchSaveStock, watchRemoveStockByid } from "./stock";

export default function* rootSaga() {
    yield all([
        watchFindAllUnit(), watchFindUnitById(), watchSaveUnit(), watchRemoveByid(),
        watchFindAllItem(), watchFindItemById(), watchSaveItem(), watchUploadItem(), watchRemoveItemByid(),
        watchFindAllStock(), watchFindStockById(), watchSaveStock(), watchRemoveStockByid(),
    ])
}