export const createPost =(post)=>{
    return $.ajax({
        method: "POST",
        url: "/api/posts",
        data: { post: post } 
    })
}

export const fetchPosts =()=>{
    return $.ajax({
        method: "GET",
        url: "api/posts"
    })
}

export const deletePost =(id)=>{
    return $.ajax({
        method: "DELETE",
        url: `api/posts/${id}`
    })
}

export const editPost = (post)=>{
    return({
        method: "PATCH",
        url: `api/posts/${post.id}`,
        data: {post: post}
    })
}