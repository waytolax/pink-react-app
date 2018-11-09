import {AUTH_START, AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT} from '../actions/actionTypes';

const initialState = {
    user: null,
    errorMsg: '',
    loading: false,
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_START:
            return {
                ...state,
                loading: true
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                user: action.user,
                errorMsg: '',
                loading: false
            }
        case AUTH_FAILURE:
            return {
                ...state,
                user: null,
                errorMsg: action.message,
                loading: false
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                user: null
            }
        default:
            return state
    }
}
