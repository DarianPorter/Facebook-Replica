import { merge } from "lodash"
import {
    RECIEVE_CURRENT_USER,
    RECIEVE_NEW_USER,
} from "../actions/user_actions"

const usersReducer =(state= {}, action)=>{
    switch(action.type){
        case RECIEVE_CURRENT_USER:
            debugger
            return merge({}, state, {
                [action.existingUser.id]: action.existingUser
            })
        case RECIEVE_NEW_USER:
            return merge({}, state, {
                [action.newUser.id]: action.newUser
            })
        default:
            return state;
    }
}

export default usersReducer