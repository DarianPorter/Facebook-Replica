import * as ApiUtil from '../util/user_api_util';
export const RECIEVE_CURRENT_USER = "RECIEVE_CURRENT_USER";
export const RECIEVE_NEW_USER = "RECIEVE_NEW_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECIEVE_LOGIN_ERRORS = "RECIEVE_LOGIN_ERRORS";
export const FETCH_FRIENDS = "FETCH_FRIENDS"; 

const receiveErrors = (errors)=>{
    return({
        type: RECIEVE_LOGIN_ERRORS,
        errors: errors 
    })
}

const loginCurrentUser = (existingUser)=>{
    return ({
        type: RECIEVE_CURRENT_USER,
        existingUser: existingUser,
    })
}

const createNewUser = (newUser) =>{
    return ({
        type: RECIEVE_NEW_USER,
        newUser: newUser,
    })
}

const logout = ()=>{
    return ({
        type: LOGOUT_CURRENT_USER,
    })
}

const getFriends = (friends)=>{
    return({
        type: FETCH_FRIENDS,
        friends: friends
    })
}

export const login = (user)=>{
    return (dispatch)=>{
       return ApiUtil.fetchUser(user).then(
            (payload)=>{
                return dispatch(loginCurrentUser(payload))
            },(response)=>{
               return dispatch(receiveErrors(response.responseJSON))
            }
        );
    }
}

export const signup = (user)=>{
    return (dispatch)=>{
        return ApiUtil.createUser(user).then(
            (payload)=>{
                return dispatch(createNewUser(payload))
            },(response)=>{
                return dispatch(receiveErrors(response.responseJSON))
            }   
        )
    }
}

export const logoutUser = ()=>{
    return (dispatch)=>{
        return ApiUtil.logout().then(
            ()=>{
                return dispatch(logout())
            },(response)=>{
                return dispatch(receiveErrors(response.responseJSON))               
            }
        )
    }
}

export const fetchAllFriends = ()=>{
    return (dispatch)=>{
        return ApiUtil.fetchAllUsersFriends().then(
            (payload)=>{
                return dispatch(getFriends(payload))
            },(response)=>{
                return dispatch(receiveErrors(response))
            }
        )
    }
}