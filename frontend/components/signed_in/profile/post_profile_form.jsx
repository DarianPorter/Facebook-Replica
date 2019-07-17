import React from 'react';
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import { createPost } from '../../../actions/post_actions'

const msp = (state)=>{
    return({
        user_id: state.session.id,  
        users:  state.entities.users,
    })
}

const mdp =(dispatch)=>{
    return({
        createPost: (postInfo)=>{return dispatch(createPost(postInfo))}
    })
}
class ProfilePostForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: "",
            receiver_id: this.props.match.params.user_id,
            user_id: this.props.user_id,
        }
        this.submitForm = this.submitForm.bind(this);
    }
    submitForm(postInfo){
        if (document.getElementById("pfp_input").value !== ""){
            document.getElementById("pfp_input").value = ""
            this.props.createPost(postInfo)
        }
    }
    handleInput(){
        return (e)=>{
            this.setState({"body": e.target.value})
        }
    }

    render(){
        let placehold = this.props.user_id == this.props.match.params.user_id ? (
            "Whats on your mind?"
        ) : (
            `Write something to ${this.props.users[this.props.match.params.user_id].firstname}...`
        )
        return(
            <div className="profile-post-form">
                <div className="profile-post-form-header">
                    <p><i className="fas fa-pencil-alt"></i>Create post</p>
                </div>
                <div className="profile-post-form-content">
                    <textarea 
                        onChange={this.handleInput()}
                        placeholder={placehold}
                        id="pfp_input"
                        onKeyDown={(e) => {
                            if (e.keyCode === 13 && e.currentTarget.value) {
                                e.preventDefault()
                                this.submitForm(this.state) 
                            } 
                        }}
                    >
                    </textarea>
                </div>
                <div className="profile-post-form-footer">
                    <button onClick={()=>{ return this.submitForm(this.state)}}> Post </button>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(msp,mdp)(ProfilePostForm))
