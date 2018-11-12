import {combineReducers} from 'redux';
import photo from './photoReducer';
import auth from './authReducer';
import global from './globalReducer';

export default combineReducers({
    photo,
    auth,
    global,
});
