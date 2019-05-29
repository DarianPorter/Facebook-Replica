import * as ApiUtil from '../util/user_api_util';
export const RECIEVE_CURRENT_USER = "RECIEVE_CURRENT_USER"

const loginCurrentUser = (existingUser)=>{
    return ({
        type: RECIEVE_CURRENT_USER,
        existingUser: existingUser,
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