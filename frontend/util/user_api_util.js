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