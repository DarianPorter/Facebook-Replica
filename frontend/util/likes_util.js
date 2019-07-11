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