import React from 'react';
import {connect} from 'react-redux'
import { requestFriendship, acceptFriendRequest } from '../../../actions/friend_actions'
import {withRouter} from 'react-router-dom'

const msp = (state, ownProps)=>{
    return ({
        current_user_id: state.session.id,
        user_from_page: state.entities.users[ownProps.match.params.user_id],
        current_user: state.entities.users[state.session.id],
    })
}
const mdp = (dispatch) =>{
    return({
        requestFriendship: (friendInfo) => {return dispatch(requestFriendship(friendInfo))},
        acceptFriendRequest: (friendInfo) => { return dispatch(acceptFriendRequest(friendInfo))}
    })
}

class TopProfileSection extends React.Component{
    constructor(props){
        super(props)
        this.state ={pending: false};
    }

    acceptFriendRequest(){
        let friendInfo = {

        }
    }

    requestFriendship(){
        if(!this.pending()){
            let friendInfo = {
                user_id: this.props.current_user_id,
                friend_id: this.props.match.params.user_id
            }
            this.props.requestFriendship(friendInfo);
        }
    }

    pending(){
        let userPageId = this.props.match.params.user_id;
        let currentUser = this.props.current_user;

        if (currentUser.pendingfriendships != undefined) {
            let keys = Object.keys(currentUser.pendingfriendships)
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                let relation = currentUser.pendingfriendships[key];
                if (relation.friend_id == userPageId) {
                    return true
                }
            }
        }
        return false
    }
    
    relationship(){
        let userPageId = this.props.match.params.user_id;
        let currentUser = this.props.current_user;
        if(currentUser.id == userPageId){
            return <span> My Page </span>
        }

        if (currentUser.pendingfriendships != undefined){
            let keys = Object.keys(currentUser.pendingfriendships)
            for(let i = 0; i < keys.length; i++){
                let key = keys[i];
                let relation = currentUser.pendingfriendships[key];
                if (relation.friend_id == userPageId){
                    if(relation.accepted === false){
                        return <span> <i className="fa fa-user">+</i> Request Sent </span>
                    }
                }
            }
        }
        
        if(currentUser.friendships != undefined){
            let keys = Object.keys(currentUser.friendships)
            for(let i = 0; i < keys.length; i++){
                let key = keys[i]
                let relation = currentUser.friendships[key];
                if(relation.friend_id == userPageId){
                    if (relation.accepted === true) {
                        return <span><i className="fas fa-check"> </i> Friends </span>
                    }
                }
            }
        }
        return <span> <i className="fa fa-user">+</i> Add Friend </span>
    }

    render(){
        return this.props.user ? (
            <div className="top-section">
                <div className="cover-photo">
                    <img 
                        src="data:image/png;base64,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" 
                        alt="pfp" 
                        className="pfp"
                    />
                    <h1 className="profile-user-name">{
                        this.props.user.firstname 
                        + " " + 
                        this.props.user.lastname
                    }</h1>
                    <div className="add-friend" onClick={()=>{this.requestFriendship()}}>
                        {this.relationship()}
                    </div>
                </div>
                <div className="options">
                    <p>Timeline</p>
                    <p>About</p>
                    <p>Friends</p>
                </div>
            </div>
        ) : (
            null
        )
    }
}

export default withRouter(connect(msp, mdp)(TopProfileSection));