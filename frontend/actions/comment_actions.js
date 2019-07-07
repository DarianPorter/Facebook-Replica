import * as ApiUtil from '../util/comment_util'
export const CREATE_COMMENT = "CREATE_COMMENT"
export const RECIEVE_COMMENT_ERRORS = "RECIEVE_COMMENT_ERRORS";

const commentErrors = (errors) => {
    return ({
        type: RECIEVE_COMMENT_ERRORS,
        errors: errors
    })
}

const createComment = (comment)=>{
    return({
        type: CREATE_COMMENT,
        comment: comment,
    })
}

export const commentCreator = (commentInfo)=>{
    return (dispatch)=>{
        return ApiUtil.CreateComment(commentInfo).then(
            (payload)=>{
                dispatch(createComment(payload))
            },(response)=>{
                dispatch(commentErrors(response))
            }
        )
    }
}