import { SET_LOADER_PROGRESS, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAIL, MY_ORDER_REQUEST, MY_ORDER_SUCCESS, MY_ORDER_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL, ALL_ORDER_REQUEST, ALL_ORDER_SUCCESS, ALL_ORDER_FAIL, UPDATE_ORDER_REQUEST, UPDATE_ORDER_SUCCESS, UPDATE_ORDER_RESET, UPDATE_ORDER_FAIL, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELETE_ORDER_RESET, DELETE_ORDER_FAIL } from "../constants/orderConstants";

export const newOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_LOADER_PROGRESS:
            return {
                ...state,
                orderLoading: action.orderLoading
            }
        case CREATE_ORDER_REQUEST:
            return {
                loading: true,
                ...state,
            }
        case CREATE_ORDER_SUCCESS:
            return {
                loading: false,
                order: action.payload,
            }
        case CREATE_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload,
            }

        default:
            return state;
    }
};

export const myOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case SET_LOADER_PROGRESS:
            return {
                ...state,
                headerLoading: action.headerLoading
            }
        case MY_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case MY_ORDER_SUCCESS:
            return {
                loading: false,
                orders: action.payload,
            }

        case MY_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload,
            }

        default:
            return state;
    }
};

export const allOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case SET_LOADER_PROGRESS:
            return {
                ...state,
                headerLoading: action.headerLoading
            }
        case ALL_ORDER_REQUEST:
            return {
                loading: true,
                ...state,
            }
        case ALL_ORDER_SUCCESS:
            return {
                loading: false,
                orders: action.payload,
            }

        case ALL_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload,
            }

        default:
            return state;
    }
};

export const orderReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case SET_LOADER_PROGRESS:
            return {
                ...state,
                headerLoading: action.headerLoading
            }
        case UPDATE_ORDER_REQUEST:
        case DELETE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload.success,
                message: action.payload.message,
            }
        case DELETE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload.success,
                message: action.payload.message,
            }
        case UPDATE_ORDER_RESET:
            return {
                ...state,
                isUpdated: false
            }
        case DELETE_ORDER_RESET:
            return {
                ...state,
                isDeleted: false
            }
        case UPDATE_ORDER_FAIL:
        case DELETE_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        default:
            return state;
    }
};

export const orderDetailsReducer = (state = { order: {} }, action) => {
    switch (action.type) {
        case SET_LOADER_PROGRESS:
            return {
                ...state,
                headerLoading: action.headerLoading
            }
        case ORDER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ORDER_DETAILS_SUCCESS:
            return {
                loading: false,
                order: action.payload,
            }

        case ORDER_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }

        default:
            return state;
    }
};