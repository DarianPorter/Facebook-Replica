import React from 'react';
import Post from './post';
import { 
    fetchAllPosts, 
    deleteExistingPost,
    fetchAllUsersPosts
} from '../../../actions/post_actions';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const msp =(state)=>{
    return({
        firstname: state.entities.users[state.session.id].firstname,
        lastname: state.entities.users[state.session.id].lastname,
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
        fetchAllUsersPostss: (currentUserId)=>{return dispatch(fetchAllUsersPosts(currentUserId))},
        deletePost: (postId) => { return () => {  return dispatch(deleteExistingPost(postId))}},
    })
}

class PostIndex extends React.Component {
    constructor(props){
        super(props)
    }
 
    componentDidMount(){
        if(this.props.usersPage === false){
            this.props.fetchPosts();
        }else{
            this.props.fetchAllUsersPostss(this.props.match.params.user_id);
        }
    }

    render(){
        return (
            <div className="posts_index">
                {this.props.posts.reverse().map((post, i)=>{
                    if (this.props.usersPage == true){
                        if (this.props.match.params.user_id == post.user_id) {
                            return (
                                <Post
                                    key={i}
                                    post={post}
                                    delete={this.props.deletePost}
                                    currentUserId={this.props.currentUserId}
                                    authorId={post.user_id}
                                />
                            )
                        }
                    }else{
                        return (
                            <Post
                                key={i}
                                post={post}
                                delete={this.props.deletePost}
                                currentUserId={this.props.currentUserId}
                                authorId={post.user_id}
                            />
                        )
                    }
                    
                })}
            </div>
        )
    }
}

export default withRouter(connect(msp,mdp)(PostIndex));

