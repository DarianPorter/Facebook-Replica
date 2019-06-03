import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import postReducer from './posts_reducer'

export default combineReducers({
    users: userReducer,
    posts: postReducer
})