import {
    LOGOUT_CURRENT_USER, 
    RECIEVE_CURRENT_USER, 
    RECIEVE_NEW_USER,         
} from '../actions/user_actions'

// in benchbnb they have null user as a variable 
// if this causes the session slice to behave weird 
// change!!!!
// no need to merge new data in our state we just replace it.
const sessionReducer =(state={id: null}, action)=>{
    switch(action.type){
        case LOGOUT_CURRENT_USER:
            return { id: null }
        case RECIEVE_CURRENT_USER:
            return { id: action.existingUser.id};
        case RECIEVE_NEW_USER:
            return { id: action.newUser.id}
        default:
            return state

    }
}

export default sessionReducer