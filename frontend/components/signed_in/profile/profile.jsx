import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import TopSection from './top_profile_section';
import LeftContent from './left_profile_content';
import PostIndex from '../news_feed/posts_index';
import ProfilePostForm from './post_profile_form';
import {findPerson} from '../../../actions/user_actions';

const msp = (state, ownProps) => {
    return ({
        user: state.entities.users[ownProps.match.params.user_id]
    })
}

const mdp = (dispatch) => {
    return ({
        userInfo: (id) => { return dispatch(findPerson(id)) }
    })
}

class ProfilePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        this.props.userInfo(this.props.match.params.user_id)
    }
    componentDidUpdate(){
        if(!this.props.user){
            this.props.userInfo(this.props.match.params.user_id)
        }
    }

    render(){
        return this.props.user ? (
            <div className="profile-page">
                <TopSection user={this.props.user} />
                <div className="profile-content">
                    <LeftContent />
                    <div className="profile-post-index">
                        <ProfilePostForm user={this.props.userInfo} />
                        <PostIndex usersPage={true} />
                    </div>
                </div>
            </div>
        ) : (
            null
        )
    }
}

export default withRouter(connect(msp,mdp)(ProfilePage));