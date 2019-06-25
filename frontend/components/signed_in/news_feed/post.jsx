import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

const msp = (state)=>{
    return{
        
    }
}

const mdp = (dispatch) => {
    return ({

    })
}

class Post extends React.Component{
    constructor(props){
        super(props)
        this.delete = this.props.delete.bind(this);
        this.goToUserPage = this.goToUserPage.bind(this);
    }

    goToUserPage(){
        debugger
        this.props.history.push(`/users/${this.props.post.user_id}`)
    
    }

    fetchAuthor(){

    }

    render(){
        const that = this;
        let deleteButton = this.props.currentUserId === this.props.post.user_id ?(
            <p
                className="delete"
                onClick={()=>{
                    debugger; that.delete(that.props.post.id)}}
            > Delete</p>
                ) : (
            null
        )
        debugger
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
                <div className="post-actions">
                    <p><i className="far fa-thumbs-up"></i>like</p> <p> <i className="far fa-comment"></i> comment</p> <p> <i className="fas fa-share"></i> share</p>
                </div>
                <div className="post-comments">

                </div>
                <div className="post-create-comment">
                    <img
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFoAhwMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQQFBgIDB//EADIQAAIBAwMCBAIJBQAAAAAAAAABAgMEEQUhMRJBIlFhcRORNGJygaGxwdHhIzIzQlL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgMBBP/EABsRAQEAAwEBAQAAAAAAAAAAAAABAhExIVES/9oADAMBAAIRAxEAPwD9DQDCPQzVBoABwUEyAwWMZTfTCLk32SyZWn2bu55eY04vd+fob2jQp0I9NKCivTuRllp2RoqemXU9+hRX1ng8Xdq7XEZ1Iym/9Y52OlMW8s6V1HxrE1xNcomZ++u/lzaKfSvRnb1XTqLdcPz9T5mqU4ZVuUmdtgDQGQAYAAIBMAR7AvJAKAgBv9Iio2EGly238zNzkxNL+gUl7/mzLML1c4oAOOtTr0V0UpY3UmvwNObrXd6NL7b/ACNLg2w4i9VcAIFODJ2KyY2AqAQAYHsCYAoAbAgYSLgDqLWnGlQhCGelLbJ9TF02sq1pB94+F/cZR571oHnd+xcZGAMDWacXaObbzBrH3vBojc65WUacaHeT6n7I02TXDiL0ZOw5LgtwQHAyAATQAAmStgRheoSKwAIUDZ6LcKFSVGTx17x9zcnN6fDrvqKxxLPy3OlMs+rxADzPeEl6EOud1Guri6lOLzFeGPqjFX4ApvJqM6AnBToMhcAAgQoE5BQABOD1GMpyUYJyb4SQEwGzZW+k1Z4deXw15Ldmzt7OhQX9Omur/p7si5yO6Y+jUHTt3Oaw5vO67GwIDO3a1ICnBoNXoyp3UqmPBNZzjhmDk6xpNYfHkYVxptvVy4r4cvOP7GmOf1NjQkey2M24024o5cY/Ej5x5+Rhehcu0iAwTJ0UEKAARUB97G0ld1Gk+mEf7pG/t7albR6aUceb7swNF/wVPt/obJN+ZllfVyPYPKKQ6pMY4KgABA+AHsCQ4K+AKYt3Y0blNtdNTtNLf+TII2/M7BzFanOjVlTmvFFnzx3xuZ+sfS0/qL9TBNpdxnURSMHR/9k="
                        alt="pfp"
                    />
                    <input
                        type="text"
                        placeholder="Write a comment..."
                    />
                </div>
            </div>
        )
    }
}

export default withRouter(connect(msp, mdp)(Post));