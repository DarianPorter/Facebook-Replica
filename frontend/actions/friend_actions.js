import * as ApiUtil from '../util/friend_util'
export const REQUEST_FRIENDSHIP = "REQUEST_FRIENDSHIP";
export const ACCEPT_FRIENDSHIP = "REQUEST_FRIENDSHIP";

const addFriend =(friendInfo)=>{
    return ({
        type: REQUEST_FRIENDSHIP,
        friend: friendInfo
    })
}
const accept_friend = ()=>{
    return ({
        type: ACCEPT_FRIENDSHIP
    })
}