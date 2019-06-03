import {merge} from 'lodash'
import {
    RECIEVE_NEW_POST,
    EDIT_POST,
    DELETE_POST,
    FETCH_POSTS,
} from '../actions/post_actions'
//watch!!!
const postReducer = (state= {}, action) =>{
    Object.freeze(state)
    switch(action.type){
        case RECIEVE_NEW_POST:
            return merge({},state,{
                [action.post.id]: action.post
            })
        case EDIT_POST:
            return merge({},state, {
                [action.post.id]: action.post
            })
        case DELETE_POST:
            newState = merge({},state) 
            delete newState[action.postId]
        case FETCH_POSTS:
            return merge({},state,action.posts)
        default:
            return state
    }
}

export default postReducer