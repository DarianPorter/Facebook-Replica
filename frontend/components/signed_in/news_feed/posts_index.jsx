import React from 'react';
import Post from './post';
import { 
    fetchAllPosts, 
    deleteExistingPost 
} from '../../../actions/post_actions';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const msp =(state, ownProps)=>{
    return({
        user: state.entities.users[state.session.id],
        currentUserId: state.session.id,
        posts: Object.keys(state.entities.posts).map((id)=>{
            return state.entities.posts[id]
        })
    })
}

const mdp = (dispatch)=>{
    return({
        fetchPosts: () => { return dispatch(fetchAllPosts())},
        deletePost: (postId) => { return () => {  return dispatch(deleteExistingPost(postId))}},
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
                {this.props.posts.reverse().map((post, i)=>{
                    return( 
                        <Post   
                            key={i} 
                            post={post}
                            delete={this.props.deletePost}
                            currentUserId={this.props.currentUserId}
                            authorId={post.user_id}
                        />    
                    )
                })}
            </div>
        )
    }
}

export default connect(msp,mdp)(PostIndex);

