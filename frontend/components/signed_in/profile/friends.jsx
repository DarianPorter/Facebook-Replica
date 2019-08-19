import React from "react";
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import FriendTile from "./friend_componet"

const msp =(state, ownProps)=>{
    return {
        users: state.entities.users,
        usersPageFriends: state.entities.users[ownProps.match.params.user_id].friends
    }
}
const mdp = (state)=>{
    // if friend is not in state fetch user
    return{

    }
}
class Friends extends React.Component{
    constructor(props){
        super(props)
    }

    displayFriendTiles(){
        debugger
    }

    render(){
        return (
            <div className="friends">
                <div className="friends-header">
                    <i className="fas fa-user-circle"></i><p>Friends</p> <span> · </span> <span className="friend-count">0000</span>
                </div>
                <div className="friend-tiles">
                    {this.displayFriendTiles()}
                </div>
            </div>
        )
    }

}
export default withRouter(connect(msp, mdp)(Friends))