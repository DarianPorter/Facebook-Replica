import { merge } from "lodash"
import {
    RECIEVE_CURRENT_USER,
    RECIEVE_NEW_USER,
    FETCH_FRIENDS,
    FIND_USER,
} from "../actions/user_actions"

const usersReducer =(state= {}, action)=>{
    switch(action.type){
        case RECIEVE_CURRENT_USER:
            return merge({}, state, {
                [action.existingUser.id]: action.existingUser
            })
        case RECIEVE_NEW_USER:
            return merge({}, state, {
                [action.newUser.id]: action.newUser
            })
        case FETCH_FRIENDS:
            return merge({}, state, action.friends)
        case FIND_USER:
            return merge({},state,{[action.user.id]: action.user})
        default:
            return state;
    }
}

export default usersReducer