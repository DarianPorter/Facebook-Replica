import * as ApiUtil from '../util/friend_util'
export const REQUEST_FRIENDSHIP = "REQUEST_FRIENDSHIP";
export const ACCEPT_FRIENDSHIP = "REQUEST_FRIENDSHIP";

const addFriend =(friendInfo)=>{
    return ({
        type: REQUEST_FRIENDSHIP,
        friend: friendInfo
    })
}
const accept_friend = (friendInfo)=>{
    return ({
        type: ACCEPT_FRIENDSHIP
    })
}

export const requestFriendship = (friendInfo)=>{
    return (dispatch)=>{
        return ApiUtil.requestFriendship(friendInfo).then(
            (payload)=>{
                return dispatch(addFriend(payload))
            }
        )
    }
}

export const acceptFriendRequest = (friendInfo)=>{
    return (dispatch)=>{
        return ApiUtil.acceptFriendRequest(friendInfo).then(
            (payload)=>{
                return dispatch(payload)
            }
        )
    }
}