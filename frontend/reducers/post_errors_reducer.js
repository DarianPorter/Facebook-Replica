import {
    RECIEVE_POST_ERRORS,
} from '../actions/post_actions'

const postErrors = (state = {}, action)=>{
    Object.freeze(state)
    switch(action.type){
        case RECIEVE_POST_ERRORS:
            return action.errors
        default: 
            return state
    }
}

export default postErrors