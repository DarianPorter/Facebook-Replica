export const CreateComment =(commentData)=>{
    return $.ajax({
        method: "POST",
        url: "/api/comments",
        data: {comment: commentData}
    })
}