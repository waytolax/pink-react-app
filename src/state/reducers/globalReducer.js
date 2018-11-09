import {SET_BROWSER, SET_MEDIA} from '../actions/actionTypes';

const initialState = {
    browser: '',
    media: ''
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_BROWSER:
            return {
                ...state,
                browser: action.browser
            }
        case SET_MEDIA:
            return {
                ...state,
                media: action.media
            }
        default:
            return state
    }
}
