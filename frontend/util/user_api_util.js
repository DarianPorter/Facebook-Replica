export const fetchUser = (signInForm)=>{
    return $.ajax({
        method: "POST",
        url: `api/session/`,
        data: {user: signInForm},
    });
}
export const createUser = (signUpForm)=>{
    return $.ajax({
        method: "POST",
        url: `api/users`,
        data: {user: signUpForm},
    });
}
export const logout = ()=>{
    return $.ajax ({
        method: "DELETE",
        url: 'api/session/'
    })
}
export const fetchAllUsersFriends = ()=>{
    return $.ajax({
        method: "GET",
        url: "api/users"
    })
}
export const findUser = (id)=>{
    return $.ajax({
        method: "GET",
        url: `api/users/${id}`
    })
}