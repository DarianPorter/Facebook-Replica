import * as ApiUtil from '../util/user_api_util';
export const RECIEVE_CURRENT_USER = "RECIEVE_CURRENT_USER"
export const RECIEVE_NEW_USER = "RECIEVE_NEW_USER";

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

export const login = (user)=>{
    return (dispatch)=>{
       return ApiUtil.fetchUser(user).then(
           (payload)=>{
                return dispatch(loginCurrentUser(payload),
                (response)=>{
                    console.log("failure", response)
                })
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
                console.log("failure", response)
            }   
        )
    }
}