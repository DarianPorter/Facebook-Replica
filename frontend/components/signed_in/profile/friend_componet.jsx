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
        this.props.currentUserId === this.props.friend
        window.scrollTo(0, 0)
        this.props.history.push(`/users/${this.props.friend.id}`)
    }

    render(){
        return(
            <div className="friend-tile" onClick={()=>{ return this.goToPage()}}>
                <span></span>
            </div>
        )
    }
}
export default withRouter(connect(msp,mdp)(FriendTile))