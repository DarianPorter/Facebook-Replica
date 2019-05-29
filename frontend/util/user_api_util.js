export const fetchUser = (signInForm)=>{
    return $.ajax({
        method: "POST",
        url: `api/session/`,
        data: {user: signInForm},
    });
}
// export const createUser = (signInForm)=>{
//     return $.ajax({
//         method: "GET",
//         url: `session/new/`,
//         data: {user: signInForm},
//     });
// }