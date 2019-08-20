import React from "react";
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import FriendTile from "./friend_componet"
import { findPerson } from "../../../actions/user_actions";

const msp =(state, ownProps)=>{
    return {
        users: state.entities.users,
        usersPageFriends: state.entities.users[ownProps.match.params.user_id].friends
    }
}
const mdp = (state)=>{
    // if friend is not in state fetch user pass down to child 
    return{
        fetchUser: (id)=>{return findPerson(id)}
    }
}
class Friends extends React.Component{
    constructor(props){
        super(props)
    }

    displayFriendTiles(){
        let user = this.props.user;
        let friendships = []
        if(user.pendingfriendships){
            Object.keys(user.pendingfriendships).map((key, i)=>{
                console.log(user.pendingfriendships[key])
                friendships.push(<FriendTile
                    friend={user.pendingfriendships[key]}
                    key={i}
                    fetchUser={this.props.fetchUser}
                />)
            })
        }
        if (user.friendships){
            Object.keys(user.friendships).map((key) => {
                console.log(user.friendships[key])
                friendships.push(<FriendTile
                    friend={user.pendingfriendships[key]}
                    key={i}
                    fetchUser={this.props.fetchUser}
                />)
            })
        }
        return friendships
    }

    render(){
        return (
            <div className="friends">
                <div className="friends-header">
                    <i className="fas fa-user-circle"></i>
                    <p>Friends</p>
                    <span> · </span> 
                    <span className="friend-count"> 
                        Pending: {this.props.user.pendingfriendships ? Object.keys(this.props.user.pendingfriendships).length : 0 }
                    </span>
                    <span> · </span> 
                    <span className="friend-count"> 
                        Accepted: {this.props.user.friendships ? Object.keys(this.props.user.friendships).length : 0}
                    </span>
                </div>
                <div className="friend-tiles">
                    {this.displayFriendTiles()}
                </div>
            </div>
        )
    }

}
export default withRouter(connect(msp, mdp)(Friends))