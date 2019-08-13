export const requestFriendship = (friendInfo)=>{
    return $.ajax({
        method: "POST",
        url: `api/users/${friendInfo.user_id}/friends`,
        data: {friend: friendInfo}
    })
}

// export const Unfriend = (friendInfo)=>{
//     return $.ajax({
//         method: "POST",
//         url: `api/users/${friendInfo.user_id}/friends/${friendInfo.id}`,
//         data: { friend: friendInfo }
//     })
// }