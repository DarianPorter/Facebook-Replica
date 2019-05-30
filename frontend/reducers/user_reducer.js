import { merge } from "lodash"
import {
    RECIEVE_CURRENT_USER,
    RECIEVE_NEW_USER
} from "../actions/user_actions"

const usersReducers =(state= {}, action)=>{
    switch(action.type){
        case RECIEVE_CURRENT_USER:
            return merge({}, state, action.existingUser)
        case RECIEVE_NEW_USER:
            return merge({},state,action.newUser)
        default:
            return state;
    }
}

export default usersReducers