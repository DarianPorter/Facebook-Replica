export const likingComment = (likeData)=>{
    $.ajax({
        method: "POST",
        url: `/api/posts/${likeData.likeable_id}/likes`,
        data: {like: likeData}
    })
}
export const likingPost = (postId, likeData)=>{
    $.ajax({
        method: "POST",
        url: `/api/comments/${postId}/likes`,
        data: {like: likeData}
    })
}