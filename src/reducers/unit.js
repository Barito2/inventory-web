import {
    FIND_ALL_UNIT, FIND_ALL_UNIT_FAILURE, FIND_ALL_UNIT_SUCCESS,
    FIND_UNIT_BY_ID, FIND_UNIT_BY_ID_FAILURE, FIND_UNIT_BY_ID_SUCCESS,
    REMOVE_UNIT_BY_ID, REMOVE_UNIT_BY_ID_FAILURE, REMOVE_UNIT_BY_ID_SUCCESS,
    SAVE_UNIT, SAVE_UNIT_FAILURE, SAVE_UNIT_SUCCESS,
} from "../constants/action";

const initialState = {
    data: null,
    isLoading: false,
    error: null
}

export const findAllUnit = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ALL_UNIT:
            return {
                ...state,
                isLoading: true
            }
        case FIND_ALL_UNIT_SUCCESS:
            console.log("success");
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_ALL_UNIT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export const findUnitById = (state = { ...initialState, data: false }, action) => {
    switch (action.type) {
        case FIND_UNIT_BY_ID:
            console.log("findId");
            return {
                ...state,
                isLoading: true
            }
        case FIND_UNIT_BY_ID_SUCCESS:
            console.log("succcess");
            console.log(action.data)
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_UNIT_BY_ID_FAILURE:
            console.log("error");
            return {
                data: false,
                isLoading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export const saveUnit = (state = { ...initialState }, action) => {
    switch (action.type) {
        case SAVE_UNIT:
            return {
                ...state,
                data: null,
                isLoading: true
            }
        case SAVE_UNIT_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case SAVE_UNIT_FAILURE:
            return {
                data: null,
                isLoading: false,
                error: null
            };
        default:
            return {
                ...state,
                data: null
            };
    }
}

export const removeUnitById = (state = { ...initialState, data: false }, action) => {
    switch (action.type) {
        case REMOVE_UNIT_BY_ID:
            return {
                ...state,
                data: false,
                loading: true
            }
        case REMOVE_UNIT_BY_ID_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case REMOVE_UNIT_BY_ID_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return false;
    }
}