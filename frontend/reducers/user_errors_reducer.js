import {
    RECIEVE_LOGIN_ERRORS,
} from '../actions/user_actions'

const errorsReducer = (state = {}, action)=>{
    Object.freeze(state)
    switch(action.type){
        case RECIEVE_LOGIN_ERRORS:
            return action.errors
        default:
            return state
    }
}

export default errorsReducer;