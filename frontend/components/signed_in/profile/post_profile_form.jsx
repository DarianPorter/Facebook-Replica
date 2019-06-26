import React from 'react';
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import { createPost } from '../../../actions/post_actions'

const msp = (state)=>{
    return({
        user_id: state.session.id,  
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
        return()=>{
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
        // add pencil 
        return(
            <div className="profile-post-form">
                <div className="profile-post-form-header">
                    <p>create post</p>
                </div>
                <div className="profile-post-form-content">
                    <textarea 
                        onChange={this.handleInput()}
                        placeholder={`Write something to ...`}
                        id="pfp_input"
                    >
                    </textarea>
                </div>
                <div className="profile-post-form-footer">
                    <button onClick={this.submitForm(this.state)}> Share </button>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(msp,mdp)(ProfilePostForm))

// to be tested 8*****/