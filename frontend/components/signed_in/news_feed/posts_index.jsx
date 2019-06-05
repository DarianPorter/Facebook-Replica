import React from 'react';
import Post from './post';
import { fetchAllPosts} from '../../../actions/post_actions';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const msp =(state, ownProps)=>{
    return({
        user: state.entities.users[state.session.id],
        posts: Object.keys(state.entities.posts).map((id)=>{
            return state.entities.posts[id]
        })
    })
}

const mdp = (dispatch)=>{
    return({
        fetchPosts: () => { return dispatch(fetchAllPosts())}
    })
}

class PostIndex extends React.Component {
    constructor(props){
        super(props)
    }

 
    componentDidMount(){
        this.props.fetchPosts()
    }

    render(){
        return (
            <div className="posts_index">
                {this.props.posts.map((post, i)=>{
                    return <Post key={i} post={post}/>
                })}
            </div>
        )
    }
}

export default connect(msp,mdp)(PostIndex);

