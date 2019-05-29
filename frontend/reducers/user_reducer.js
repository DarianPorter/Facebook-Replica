import { merge } from "lodash"
import {RECIEVE_CURRENT_USER} from "../actions/user_actions"

const usersReducers =(state= {}, action)=>{
    switch(action.type){
        case RECIEVE_CURRENT_USER:
            return merge({}, state, action.existingUser)
        default:
            return state;
    }
}

export default usersReducers