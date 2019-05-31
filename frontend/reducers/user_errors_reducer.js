import {
    RECIEVE_LOGIN_ERRORS,
    RECIEVE_CURRENT_USER,
} from '../actions/user_actions'

const errorsReducer = (state = {}, action)=>{
    Object.freeze(state)
    switch(action.type){
        case RECIEVE_LOGIN_ERRORS:
            return action.errors
        case RECIEVE_CURRENT_USER:
            return [];
        default:
            return state
    }
}

export default errorsReducer;