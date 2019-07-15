export const likingComment = (likeData)=>{
    return $.ajax({
        method: "POST",
        url: `/api/posts/${likeData.likeable_id}/likes`,
        data: {like: likeData}
    })
}
export const likingPost = (likeData)=>{
    return $.ajax({
        method: "POST",
        url: `/api/comments/${likeData.likeable_id}/likes`,
        data: {like: likeData}
    })
}
export const deletePostLike = (likeData)=>{
    return $.ajax({
        method: "DELETE",
        url: `/api/posts/${likeData.post_id}/likes/${likeData.id}`,
    })
} //////////////////////////////////////////////////////////make everytig for post then coment 
//////inn reducers too !!!
