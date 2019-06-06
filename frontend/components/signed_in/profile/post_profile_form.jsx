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
    }

    render(){
        return(
            <div className="profile-post-form">
                <div className="profile-post-form-header">
                    
                </div>
                <div className="profile-post-form-content">

                </div>
                <div className="profile-post-form-footer">

                </div>
            </div>
        );
    }
}

export default connect(msp,mdp)(ProfilePostForm)