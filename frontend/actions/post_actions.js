import * as ApiUtil from '../util/post_util';
export const RECIEVE_NEW_POST = "RECIEVE_NEW_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_USERS_POSTS = "FETCH_USERS_POSTS";
export const RECIEVE_POST_ERRORS = "RECIEVE_POST_ERRORS";

const postErrors = (errors)=>{
    return ({
        type: RECIEVE_POST_ERRORS,
        errors: errors
    })
}

const createNewPost = (postForm) =>{
    return({
        type: RECIEVE_NEW_POST,
        post: postForm
    })
}

const deletePost = (postId)=>{
    return({
        type: DELETE_POST,
        postId: postId
    })
}

const editPost = (postForm)=>{
    return ({
        type: EDIT_POST,
        newPostInfo: postForm
    })
}

const getAllUsersPost = (posts)=>{
    return({
        type: FETCH_USERS_POSTS,
        posts: posts
    })
}
const getAllPosts = (posts)=>{
    return ({
        type: FETCH_POSTS,
        posts: posts
    })
}

export const createPost = (postForm)=>{
    return (dispatch)=>{
        return ApiUtil.createPost(postForm).then(
            (payload)=>{
                return dispatch(createNewPost(payload))
            },(response)=>{
                return dispatch(postErrors(response))
            }
        );
    }
}

export const editExistingPost = (postForm) => { 
    return (dispatch)=>{
        return ApiUtil.editPost(postForm).then(
            (payload)=>{
                return dispatch(editPost(payload))
            },(response)=>{
                return dispatch(postErrors(response))
            }
        )
    }
}

export const deleteExistingPost = (id)=>{
    return (dispatch)=>{
        return ApiUtil.deletePost(id).then(
            ()=>{
                return dispatch(deletePost(id))
            },(response)=>{
                return dispatch(postErrors(response))
            }
        )
    }
}

export const fetchAllPosts = ()=>{
    return (dispatch)=>{
        return ApiUtil.fetchPosts().then(
            (payload)=>{
                return dispatch(getAllPosts(payload))
            },(response)=>{
                return dispatch(postErrors(response))
            }
        )
    }
}

export const fetchAllUsersPosts =(id)=>{
    return (dispatch)=>{
        return ApiUtil.fetchUsersPosts(id).then(
            (payload)=>{
                return dispatch(getAllUsersPost(payload))
            },(response)=>{
                return dispatch(postErrors(response))
            }
        )
    }
}