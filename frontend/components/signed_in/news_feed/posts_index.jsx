import React from 'react';
import Post from './post'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchAllFriends } from '../../../actions/user_actions'
import { fetchAllPosts, deleteExistingPost } from '../../../actions/post_actions'

const msp = (state)=>{
    return({
        current_user_id: state.session.id,
        friends: state.entities.users,
        posts: Object.keys(state.entities.posts).map((id) => {
            return state.entities.posts[id]
        })
    })
}

const mdp = (dispatch)=>{
    return({
        fetchFreiends: () => { return dispatch(fetchAllFriends())},
        fetchAllPosts: () => { return dispatch(fetchAllPosts())},
        deletePost: (id) => { return dispatch(deleteExistingPost(id))},
    })
}

class _PostIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchFreiends()
        this.props.fetchAllPosts()
    }

    constructPost(post, i){
        return(
            <Post   
                key={i}
                post={post}
                delete={this.props.deletePost}
                currentUserId={this.props.current_user_id}
                firstname={this.props.friends[post.user_id] ? this.props.friends[post.user_id].firstname : null}
                lastname={this.props.friends[post.user_id] ? this.props.friends[post.user_id].lastname : null}
            />
        )
    }

    render(){
        return(
            <div className="posts_index">
                {this.props.posts.reverse().map((post, i)=>{
                    if(this.props.match.params.user_id == undefined){
                        return (
                            this.constructPost(post, i)
                        )
                    }else{  
                        if (this.props.match.params.user_id == post.receiver_id) {
                            return(
                                this.constructPost(post, i)
                            )
                        }
                    }
                })}
            </div>
        )
    }
}
export default withRouter(connect(msp, mdp)(_PostIndex));