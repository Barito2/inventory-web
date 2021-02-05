import {
    FIND_ALL_STOCK, FIND_ALL_STOCK_FAILURE, FIND_ALL_STOCK_SUCCESS,
    FIND_STOCK_BY_ID, FIND_STOCK_BY_ID_FAILURE, FIND_STOCK_BY_ID_SUCCESS,
    REMOVE_STOCK_BY_ID, REMOVE_STOCK_BY_ID_FAILURE, REMOVE_STOCK_BY_ID_SUCCESS,
    SAVE_STOCK, SAVE_STOCK_FAILURE, SAVE_STOCK_SUCCESS,
} from "../constants/action";

const initialState = {
    data: null,
    isLoading: false,
    error: null
}

export const findAllSTOCK = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ALL_STOCK:
            return {
                ...state,
                isLoading: true
            }
        case FIND_ALL_STOCK_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_ALL_STOCK_FAILURE:
            return {
                data: false,
                isLoading: false,
                error: action.error
            };
        default:
            return {
                ...state,
                data: null
            };
    }
}

export const findSTOCKById = (state = { ...initialState, data: false }, action) => {
    console.log("find STOCK success");
    switch (action.type) {
        case FIND_STOCK_BY_ID:
            return {
                ...state,
                isLoading: true
            }
        case FIND_STOCK_BY_ID_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_STOCK_BY_ID_FAILURE:
            return {
                data: false,
                isLoading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export const saveSTOCK = (state = { ...initialState }, action) => {
    switch (action.type) {
        case SAVE_STOCK:
            return {
                ...state,
                data: null,
                isLoading: true
            }
        case SAVE_STOCK_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case SAVE_STOCK_FAILURE:
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

export const removeSTOCKById = (state = { ...initialState, data: false }, action) => {
    switch (action.type) {
        case REMOVE_STOCK_BY_ID:
            return {
                ...state,
                data: false,
                loading: true
            }
        case REMOVE_STOCK_BY_ID_SUCCESS:
            return {
                data: true,
                loading: false,
                error: null
            }
        case REMOVE_STOCK_BY_ID_FAILURE:
            return {
                data: false,
                isLoading: false,
                error: action.error
            };
        default:
            return { ...state, data: false };
    }
}