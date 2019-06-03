import {combineReducers} from 'redux';
import userErrors from './user_errors_reducer';
import postErrors from './post_errors_reducer'
const errors = combineReducers({ 
    userErrors: userErrors,
    postErrors: postErrors,
})

export default errors