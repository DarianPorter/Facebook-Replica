import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {likeComment} from '../../../actions/like_actions'

const msp = (state, ownProps)=>{
    return ({
        post: state.entities.posts[ownProps.postId],
        user_id: state.session.id
    })
}
const mdp = (dispatch)=>{
    return ({
        likeComment: (likeInfo)=>{return dispatch(likeComment(likeInfo))}
    })
}

class PostComment extends React.Component{
    constructor(props){
        super(props)
    }
    
    dispatchlike(){
        let isliked = false;
        let comment = this.props.post.comments[this.props.comment.id];
        if (comment.likes){
            Object.keys(comment.likes).map((key, i)=>{
                if(comment.likes[key].id === this.props.user_id){
                    liked = true
                }
            })
        }
        if(isliked === false || !comment.likes){
            let likeInfo = {
                likeable_id: this.props.comment.id,
                likeable_type: "Comment",
                user_id: this.props.user_id
            }
            this.props.likeComment(likeInfo)
        }
    }
    render(){
        let likes = this.props.comment.like_count > 0 ? (
            <div className="likes">
                <i className="far fa-thumbs-up"> </i> <p> · </p> <p> {this.props.comment.like_count}</p>  <p> · </p>
            </div>
        ) : (
            null
        )
        return (
            <div className="comment">
                <Link to={`users/${this.props.comment.user_id}`}>
                    <img 
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFoAhwMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQQFBgIDB//EADIQAAIBAwMCBAIJBQAAAAAAAAABAgMEEQUhMRJBIlFhcRORNGJygaGxwdHhIzIzQlL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgMBBP/EABsRAQEAAwEBAQAAAAAAAAAAAAABAhExIVES/9oADAMBAAIRAxEAPwD9DQDCPQzVBoABwUEyAwWMZTfTCLk32SyZWn2bu55eY04vd+fob2jQp0I9NKCivTuRllp2RoqemXU9+hRX1ng8Xdq7XEZ1Iym/9Y52OlMW8s6V1HxrE1xNcomZ++u/lzaKfSvRnb1XTqLdcPz9T5mqU4ZVuUmdtgDQGQAYAAIBMAR7AvJAKAgBv9Iio2EGly238zNzkxNL+gUl7/mzLML1c4oAOOtTr0V0UpY3UmvwNObrXd6NL7b/ACNLg2w4i9VcAIFODJ2KyY2AqAQAYHsCYAoAbAgYSLgDqLWnGlQhCGelLbJ9TF02sq1pB94+F/cZR571oHnd+xcZGAMDWacXaObbzBrH3vBojc65WUacaHeT6n7I02TXDiL0ZOw5LgtwQHAyAATQAAmStgRheoSKwAIUDZ6LcKFSVGTx17x9zcnN6fDrvqKxxLPy3OlMs+rxADzPeEl6EOud1Guri6lOLzFeGPqjFX4ApvJqM6AnBToMhcAAgQoE5BQABOD1GMpyUYJyb4SQEwGzZW+k1Z4deXw15Ldmzt7OhQX9Omur/p7si5yO6Y+jUHTt3Oaw5vO67GwIDO3a1ICnBoNXoyp3UqmPBNZzjhmDk6xpNYfHkYVxptvVy4r4cvOP7GmOf1NjQkey2M24024o5cY/Ej5x5+Rhehcu0iAwTJ0UEKAARUB97G0ld1Gk+mEf7pG/t7albR6aUceb7swNF/wVPt/obJN+ZllfVyPYPKKQ6pMY4KgABA+AHsCQ4K+AKYt3Y0blNtdNTtNLf+TII2/M7BzFanOjVlTmvFFnzx3xuZ+sfS0/qL9TBNpdxnURSMHR/9k=" 
                        alt="author-pfp" 
                        className="author-image"
                    />
                </Link>
                <div>
                    <div className="author-comment">
                        <p> <Link 
                            to={`/users/${this.props.comment.user_id}`}
                            className="author-name"
                        >{this.props.comment.firstname + " " + this.props.comment.lastname}</Link>
                            {this.props.comment.body}</p>
                    </div>
                    <div className="comment-actions">
                        <p 
                            onClick={()=>{this.dispatchlike()}}
                            className="like"
                        >Like</p> <p> · </p> { likes } <p> {this.props.comment.date} </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(msp,mdp)(PostComment)