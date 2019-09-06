import React from 'react'
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"

const msp=(state)=>{
    return{
        users: state.entities.users
    }
}
const mdp=()=>{
    return{

    }
}
class FriendTile extends React.Component{
    constructor(props){
        super(props)
    }

    goToPage(){
        let id = null;
        if (this.props.currentUserId === this.props.friend.friend_id){
            id = this.props.friend.friendrequester_id;
        }else{
            id = this.props.friend.friend_id;
        }
        window.scrollTo(0, 0);
        this.props.history.push(`/users/${id}`);
    }

    render(){
        let user = this.props.users[this.props.friend.friend_id];
        let usrName = user ? (
            <div>
                <span>
                    {user.firstname}
                </span>
                <br />
                <span>
                    {user.lastname}
                </span>
            </div>
        ) :(
            null
        )
        return(
            <div className="friend-tile" onClick={()=>{ return this.goToPage()}}>
                {usrName}
            </div>
        )
    }
}
export default withRouter(connect(msp,mdp)(FriendTile))