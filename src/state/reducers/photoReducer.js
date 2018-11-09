import {SET_ACTIVE, CHANGE_VALUE, SET_DEFAULT, UPLOAD, UPDATE_IMAGE, SET_IMAGE_ERROR, SET_LIKE, SET_COMMENT, ADD_ARTICLE_SUCCESS, FETCH_ARTICLES_START, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_ERROR} from '../actions/actionTypes';

const initialState = {
    loading: true,
    fetchError: '',
    articles: [],
    brightness: {active: true, value: 100},
    saturate: {active: false, value: 100},
    contrast: {active: false, value: 100},
    hasChanged: false,
    file: '',
    imagePreviewUrl: '',
    imageError: false,
    commentText: ''
}

export default function photoReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ARTICLES_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_ARTICLES_SUCCESS:
            return {
                ...state,
                loading: false,
                articles: action.fetchedArticles
            }
        case FETCH_ARTICLES_ERROR:
        return {
            ...state,
            loading: false,
            fetchError: action.fetchError
        }
        case SET_ACTIVE:
            return {
                ...state,
                ...action.results
            }
        case CHANGE_VALUE:
            return {
                ...state,
                [action.currentInput]: {
                    active: state[action.currentInput].active,
                    value: action.inputValue
                },
                hasChanged: true
            }
        case SET_DEFAULT:
            return {
                ...state,
                brightness: {active: state.brightness.active, value: 100},
                saturate: {active: state.saturate.active, value: 100},
                contrast: {active: state.contrast.active, value: 100},
                hasChanged: false
            }
        case UPDATE_IMAGE:
            return {
                ...state,
                file: action.file,
                imagePreviewUrl: action.url,
                imageError: false
            }
        case SET_IMAGE_ERROR:
            return {
                ...state,
                file: '',
                imageError: true
            }
        case SET_COMMENT:
            return {
                ...state,
                commentText: action.text
            }
        case UPLOAD:
            return {
                ...state,
                styles: action.styles
            }
        case ADD_ARTICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                articles: action.newArticles,
                file: '',
                imagePreviewUrl: '',
                commentText: ''
            }
        case SET_LIKE:
            return {
                ...state,
                articles: [...action.articles]
            }
        default:
            return state
    }
}
