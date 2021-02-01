import { all } from "redux-saga/effects";
import { watchFindAllUnit, watchFindUnitById, watchSaveUnit, watchRemoveByid } from "./unit";

export default function* rootSaga() {
    yield all([
        watchFindAllUnit(), watchFindUnitById(), watchSaveUnit(), watchRemoveByid()
    ])
}