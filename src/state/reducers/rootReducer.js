import {combineReducers} from 'redux';
import photoReducer from './photoReducer';
import authReducer from './authReducer';
import globalReducer from './globalReducer';

export default combineReducers({
    photoReducer, authReducer, globalReducer
})
