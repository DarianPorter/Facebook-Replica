import {combineReducers} from 'redux';
import userReducer from './user_reducer';
import errors from './errors_reducer'

const rootReducer = combineReducers({
    user: userReducer,
    errors: errors,
});

export default rootReducer