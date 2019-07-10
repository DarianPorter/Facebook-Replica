import {merge} from 'lodash'
import {
    RECIEVE_NEW_POST,
    EDIT_POST,
    DELETE_POST,
    FETCH_POSTS,
    FETCH_USERS_POSTS,
} from '../actions/post_actions'

import {
    CREATE_COMMENT,
} from '../actions/comment_actions'

import {
    LIKE_COMMENT,
    LIKE_POST,
} from '../actions/like_actions'


const postReducer = (state = {}, action) =>{
    Object.freeze(state)
    switch(action.type){
        // case LIKE_COMMENT:
        case LIKE_POST:
            debugger
            // debugger get action.like.likeable_id key into post add like to post 
        case CREATE_COMMENT:
            let mergedComments = merge({},state[action.comment.post_id].comments,{[action.comment.id]: action.comment});
            let post = state[action.comment.post_id]
            post.comments = mergedComments
            return merge({}, state, {[action.comment.post_id]: post})
        case RECIEVE_NEW_POST:
            return merge({},state,{
                [action.post.id]: action.post
            })
        case EDIT_POST:
            return merge({},state, {
                [action.post.id]: action.post
            })
        case DELETE_POST:
            let newState = merge({},state) 
            delete newState[action.postId]
            return newState
        case FETCH_POSTS:
            return merge({},state,action.posts)
        case FETCH_USERS_POSTS:
            return merge({},state, action.posts)
        default:
            return state
    }
}

export default postReducer