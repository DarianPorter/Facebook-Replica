import {combineReducers} from 'redux';
import userErrors from './user_errors_reducer';

const errors = combineReducers({ 
    userErrors: userErrors,
    //post errors
})

export default errors