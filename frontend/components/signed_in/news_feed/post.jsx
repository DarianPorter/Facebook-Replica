import React from 'react'
import PostComment from './post_comment'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { commentCreator } from '../../../actions/comment_actions'
import { likePost } from '../../../actions/like_actions'

const msp = (state)=>{
    return{
        user_id: state.session.id,
    }
}

const mdp = (dispatch) => {
    return ({
        createComment: (commentInfo) => { return dispatch(commentCreator(commentInfo))},
        likePost: (likeInfo)=>{return dispatch(likePost(likeInfo))}
    })
}

class Post extends React.Component{
    constructor(props){
        super(props)
        this.delete = this.props.delete.bind(this);
        this.goToUserPage = this.goToUserPage.bind(this);
        this.likePost = this.likePost.bind(this)
        this.state = {
            liked: false 
        }
    }
    componentDidMount(){
        if (this.props.post.likes !== undefined){

            this.isLiked(this.props.post.likes)
        }
    }
    goToUserPage(){
        window.scrollTo(0, 0)
        this.props.history.push(`/users/${this.props.post.user_id}`)
    }

    comments(){
        if(this.props.post.comments){
            return Object.keys(this.props.post.comments).map((key, i)=>{
                return <PostComment key={i} comment={this.props.post.comments[key]} />
            })
        }else{
            return null
        }
    }
    startComment(){
        document.getElementById("comment-input").focus()
    }

    makeComment(e){
        e.preventDefault()
        let postInfo = {
            body: e.currentTarget.value,
            user_id: this.props.user_id,
            post_id: this.props.post.id
        }
        this.props.createComment(postInfo)
        e.currentTarget.value = ""
    }

    isLiked(likes){
        let keys = Object.keys(likes);
        for(let i = 0; i < keys.length; i++){
            if (likes[keys[i]].user_id === this.props.user_id) {
                this.setState({ liked: true });
                return true
            }
        }
        return false
    }

    likePost(e){
        let likeInfo={
            likeable_type: "Post",
            user_id: this.props.user_id,
            likeable_id: this.props.post.id
        };
        
        if (this.props.post.likes === undefined){
            this.props.likePost(likeInfo);
            e.currentTarget.getElementsByTagName("i")[0].classList.remove("far");
            e.currentTarget.getElementsByTagName("i")[0].classList.add("liked", "fas");
        
        }else{
            if(this.isLiked(this.props.post.likes) === false){
                this.props.likePost(likeInfo)

                e.currentTarget.getElementsByTagName("i")[0].classList.remove("far");
                e.currentTarget.getElementsByTagName("i")[0].classList.add("liked", "fas");
            }
        } 
    }
    render(){
        const that = this;

        let deleteButton = this.props.currentUserId === this.props.post.user_id ?(
            <p
                className="delete"
                onClick={()=>{
                    that.delete(that.props.post.id)}}
            > Delete</p>
                ) : (
            null
        )
   
        let likeAction = this.state.liked === true ? (
            <p onClick={this.likePost}><i className="fas fa-thumbs-up liked"></i>Like</p>
        ) : (
            <p onClick={this.likePost}><i className="far fa-thumbs-up"></i>Like</p>
        )
        
        let likes = this.props.post.likes ? Object.keys(this.props.post.likes).length > 0 ? (
            <p> {Object.keys(this.props.post.likes).length + " Likes"} </p>
        ) : (
            null
        ) : (
            null
        )

        let comments = this.props.post.comments ? Object.keys(this.props.post.comments).length > 0 ? (
            <p> {Object.keys(this.props.post.comments).length + " Comments"} </p>
        ) : (
            null
        ) : (
            null
        )


        return (
            <div className="post-item">
                <div className="post-info">
                    <img
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFoAhwMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQQFBgIDB//EADIQAAIBAwMCBAIJBQAAAAAAAAABAgMEEQUhMRJBIlFhcRORNGJygaGxwdHhIzIzQlL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgMBBP/EABsRAQEAAwEBAQAAAAAAAAAAAAABAhExIVES/9oADAMBAAIRAxEAPwD9DQDCPQzVBoABwUEyAwWMZTfTCLk32SyZWn2bu55eY04vd+fob2jQp0I9NKCivTuRllp2RoqemXU9+hRX1ng8Xdq7XEZ1Iym/9Y52OlMW8s6V1HxrE1xNcomZ++u/lzaKfSvRnb1XTqLdcPz9T5mqU4ZVuUmdtgDQGQAYAAIBMAR7AvJAKAgBv9Iio2EGly238zNzkxNL+gUl7/mzLML1c4oAOOtTr0V0UpY3UmvwNObrXd6NL7b/ACNLg2w4i9VcAIFODJ2KyY2AqAQAYHsCYAoAbAgYSLgDqLWnGlQhCGelLbJ9TF02sq1pB94+F/cZR571oHnd+xcZGAMDWacXaObbzBrH3vBojc65WUacaHeT6n7I02TXDiL0ZOw5LgtwQHAyAATQAAmStgRheoSKwAIUDZ6LcKFSVGTx17x9zcnN6fDrvqKxxLPy3OlMs+rxADzPeEl6EOud1Guri6lOLzFeGPqjFX4ApvJqM6AnBToMhcAAgQoE5BQABOD1GMpyUYJyb4SQEwGzZW+k1Z4deXw15Ldmzt7OhQX9Omur/p7si5yO6Y+jUHTt3Oaw5vO67GwIDO3a1ICnBoNXoyp3UqmPBNZzjhmDk6xpNYfHkYVxptvVy4r4cvOP7GmOf1NjQkey2M24024o5cY/Ej5x5+Rhehcu0iAwTJ0UEKAARUB97G0ld1Gk+mEf7pG/t7albR6aUceb7swNF/wVPt/obJN+ZllfVyPYPKKQ6pMY4KgABA+AHsCQ4K+AKYt3Y0blNtdNTtNLf+TII2/M7BzFanOjVlTmvFFnzx3xuZ+sfS0/qL9TBNpdxnURSMHR/9k="
                        alt="pfp"
                    />
                    <div>
                        <div>
                            <p className="name"
                                onClick={this.goToUserPage}
                            >{this.props.firstname + " " + this.props.lastname}</p>
                            <p className="time"> {this.props.post.date}</p>
                        </div>
                        {deleteButton}
                    </div>
                </div>
                <div className="post-body">
                    <p>{this.props.post.body}</p>
                </div>
                <div className="post-likes-comments">
                    {likes} {comments}
                </div>
                <div className="post-actions">
                    {likeAction}
                    <p onClick={this.startComment}> <i className="far fa-comment"></i> Comment</p>
                    <p> <i className="fas fa-share"></i> Share</p>
                </div>
                <div className="post-comments">
                    {this.comments()}
                </div>
                <div className="post-create-comment">
                    <img
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFoAhwMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQQFBgIDB//EADIQAAIBAwMCBAIJBQAAAAAAAAABAgMEEQUhMRJBIlFhcRORNGJygaGxwdHhIzIzQlL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgMBBP/EABsRAQEAAwEBAQAAAAAAAAAAAAABAhExIVES/9oADAMBAAIRAxEAPwD9DQDCPQzVBoABwUEyAwWMZTfTCLk32SyZWn2bu55eY04vd+fob2jQp0I9NKCivTuRllp2RoqemXU9+hRX1ng8Xdq7XEZ1Iym/9Y52OlMW8s6V1HxrE1xNcomZ++u/lzaKfSvRnb1XTqLdcPz9T5mqU4ZVuUmdtgDQGQAYAAIBMAR7AvJAKAgBv9Iio2EGly238zNzkxNL+gUl7/mzLML1c4oAOOtTr0V0UpY3UmvwNObrXd6NL7b/ACNLg2w4i9VcAIFODJ2KyY2AqAQAYHsCYAoAbAgYSLgDqLWnGlQhCGelLbJ9TF02sq1pB94+F/cZR571oHnd+xcZGAMDWacXaObbzBrH3vBojc65WUacaHeT6n7I02TXDiL0ZOw5LgtwQHAyAATQAAmStgRheoSKwAIUDZ6LcKFSVGTx17x9zcnN6fDrvqKxxLPy3OlMs+rxADzPeEl6EOud1Guri6lOLzFeGPqjFX4ApvJqM6AnBToMhcAAgQoE5BQABOD1GMpyUYJyb4SQEwGzZW+k1Z4deXw15Ldmzt7OhQX9Omur/p7si5yO6Y+jUHTt3Oaw5vO67GwIDO3a1ICnBoNXoyp3UqmPBNZzjhmDk6xpNYfHkYVxptvVy4r4cvOP7GmOf1NjQkey2M24024o5cY/Ej5x5+Rhehcu0iAwTJ0UEKAARUB97G0ld1Gk+mEf7pG/t7albR6aUceb7swNF/wVPt/obJN+ZllfVyPYPKKQ6pMY4KgABA+AHsCQ4K+AKYt3Y0blNtdNTtNLf+TII2/M7BzFanOjVlTmvFFnzx3xuZ+sfS0/qL9TBNpdxnURSMHR/9k="
                        alt="pfp"
                    />
                    <input
                        type="text"
                        placeholder="Write a comment..."
                        id="comment-input"
                        onKeyDown={(e)=>{if(e.keyCode === 13){this.makeComment(e)}}}
                    />
                </div>
            </div>
        )
    }
}

export default withRouter(connect(msp, mdp)(Post));