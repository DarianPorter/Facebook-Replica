import * as ApiUtil from "../util/likes_util";
export const LIKE_COMMENT = "LIKE_COMMENT"
export const LIKE_POST = "LIKE_POST";
export const DELETE_LIKE = "DELETE_LIKE"
export const RECIEVE_LIKE_ERRORS = "RECIEVE_LIKE_ERRORS";

const LikeErrors = (errors) => {
    return ({
        type: RECIEVE_LIKE_ERRORS,
        errors: errors
    })
}

const createCommentLike = (likeInfo)=>{
    return({
        type: LIKE_COMMENT,
        like: likeInfo
    })
}
const createPostLike = (likeInfo)=>{
    return({
        type: LIKE_POST,
        like: likeInfo
    })
}
const createDeleteLike = (likeId)=>{
    return ({
        type: DELETE_LIKE,
        like: likeId
    })
}


export const likeComment = (likeData) =>{
    return (dispatch)=>{
        return ApiUtil.likingComment(likeData).then(
            (payload)=>{
                return dispatch(createCommentLike(payload))
            },(response)=>{
                return dispatch(LikeErrors(response))
            }
        );
    }
}

export const likePost = (likeData) =>{
    return (dispatch)=>{
        return ApiUtil.likingPost(likeData).then(
            (payload)=>{
                return dispatch(createPostLike(payload))
            },(response)=>{
                return dispatch(LikeErrors(response))
            }
        );
    }
}

export const deleteLike = (likeId) => {
    return(dispatch)=>{
        return ApiUtil.deletePostLike(likeId).then(
            ()=>{
                return dispatch(createDeleteLike(likeId))
            },(response) => {
                return dispatch(LikeErrors(response))
            }
        );
    }
}