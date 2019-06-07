import React from 'react';
import {connect} from 'react-redux';
import TopSection from './top_profile_section';
import LeftContent from './left_profile_content';
import PostIndex from '../news_feed/posts_index';
import PostIndexForm from './post_profile_form'
const msp = (state)=>{
    return({

    });
}

const mdp = (dispatch)=>{
    return ({

    });
}

class ProfilePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className="profile-page">
                <TopSection />
                <div className="profile-content">
                    <LeftContent />
                    <div className="profile-post-index">
                        <PostIndexForm />
                        <PostIndex usersPage={true} />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(msp,mdp)(ProfilePage)