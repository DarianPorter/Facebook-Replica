import React from 'react';
import {connect} from 'react-redux'
import { createPost } from '../../../actions/post_actions'

const msp = (state)=>{
    return({

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
            body: " "
        }
    }
    submitForm(postInfo){
        return()=>{
            this.props.createPost(postInfo)
        }
    }
    handleInput(){
        return (e)=>{
            this.setState({"body": e.target.value})
            console.log(this.state)
        }
    }

    render(){
        return(
            <div className="profile-post-form">
                <div className="profile-post-form-header">
                    <p>create post</p>
                </div>
                <div className="profile-post-form-content">
                    <textarea 
                        onChange={this.handleInput()}
                        placeholder={`write something to ...`}
                    >


                    </textarea>
                </div>
                <div className="profile-post-form-footer">
                    <button> Share </button>
                </div>
            </div>
        );
    }
}

export default connect(msp,mdp)(ProfilePostForm)