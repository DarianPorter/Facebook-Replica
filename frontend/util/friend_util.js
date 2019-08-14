export const requestFriendship = (friendInfo)=>{
    debugger
    return $.ajax({
        method: "POST",
        url: `api/users/${friendInfo.user_id}/friends`,
        data: {friend: friendInfo}
    })
}
export const acceptFriendRequest = (friendInfo)=>{
    return $.ajax({
        method: "PATCH",
        url: `/api/users/${friendInfo.user_id}/friends/${id}`
    })
}

// export const Unfriend = (friendInfo)=>{
//     return $.ajax({
//         method: "POST",
//         url: `api/users/${friendInfo.user_id}/friends/${friendInfo.id}`,
//         data: { friend: friendInfo }
//     })
// }