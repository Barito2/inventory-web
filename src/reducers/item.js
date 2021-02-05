import {
    FIND_ALL_ITEM, FIND_ALL_ITEM_FAILURE, FIND_ALL_ITEM_SUCCESS,
    FIND_ITEM_BY_ID, FIND_ITEM_BY_ID_FAILURE, FIND_ITEM_BY_ID_SUCCESS,
    REMOVE_ITEM_BY_ID, REMOVE_ITEM_BY_ID_FAILURE, REMOVE_ITEM_BY_ID_SUCCESS,
    SAVE_ITEM, SAVE_ITEM_FAILURE, SAVE_ITEM_SUCCESS,
} from "../constants/action";

const initialState = {
    data: null,
    isLoading: false,
    error: null
}

export const findAllItem = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ALL_ITEM:
            return {
                ...state,
                isLoading: true
            }
        case FIND_ALL_ITEM_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_ALL_ITEM_FAILURE:
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

export const findItemById = (state = { ...initialState, data: false }, action) => {
    console.log("find item success");
    switch (action.type) {
        case FIND_ITEM_BY_ID:
            return {
                ...state,
                isLoading: true
            }
        case FIND_ITEM_BY_ID_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_ITEM_BY_ID_FAILURE:
            return {
                data: false,
                isLoading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export const saveItem = (state = { ...initialState }, action) => {
    switch (action.type) {
        case SAVE_ITEM:
            return {
                ...state,
                data: null,
                isLoading: true
            }
        case SAVE_ITEM_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case SAVE_ITEM_FAILURE:
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

export const removeItemById = (state = { ...initialState, data: false }, action) => {
    switch (action.type) {
        case REMOVE_ITEM_BY_ID:
            return {
                ...state,
                data: false,
                loading: true
            }
        case REMOVE_ITEM_BY_ID_SUCCESS:
            return {
                data: true,
                loading: false,
                error: null
            }
        case REMOVE_ITEM_BY_ID_FAILURE:
            return {
                data: false,
                isLoading: false,
                error: action.error
            };
        default:
            return { ...state, data: false };
    }
}