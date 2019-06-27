import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions'
import faker from 'faker'


const msp = (state)=>{
    return ({
        firstname: state.entities.users[state.session.id].firstname,
        user_id: state.session.id,
    })
}
const mdp = (dispatch)=>{
    return ({
        submitPost: (postInfo) => { return dispatch(createPost(postInfo))}
    })
}

class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            body: "",
            user_id: this.props.user_id,
            receiver_id: this.props.user_id
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    randomPost(){
        return ()=>{
            let post = faker.lorem.sentence();
            this.setState({body: post})
            document.getElementById("input").value = post
        }
    }
    handleInput(e){
        this.setState({"body": e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.submitPost(this.state);
        document.getElementById("input").value = ""
    }

    render(){
        return(
            <div className="n-f-postform">
                <div className="form-header">
                    Create Post
                </div>
                <div className="pic-textarea">
                    <img 
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFoAhwMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQQFBgIDB//EADIQAAIBAwMCBAIJBQAAAAAAAAABAgMEEQUhMRJBIlFhcRORNGJygaGxwdHhIzIzQlL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgMBBP/EABsRAQEAAwEBAQAAAAAAAAAAAAABAhExIVES/9oADAMBAAIRAxEAPwD9DQDCPQzVBoABwUEyAwWMZTfTCLk32SyZWn2bu55eY04vd+fob2jQp0I9NKCivTuRllp2RoqemXU9+hRX1ng8Xdq7XEZ1Iym/9Y52OlMW8s6V1HxrE1xNcomZ++u/lzaKfSvRnb1XTqLdcPz9T5mqU4ZVuUmdtgDQGQAYAAIBMAR7AvJAKAgBv9Iio2EGly238zNzkxNL+gUl7/mzLML1c4oAOOtTr0V0UpY3UmvwNObrXd6NL7b/ACNLg2w4i9VcAIFODJ2KyY2AqAQAYHsCYAoAbAgYSLgDqLWnGlQhCGelLbJ9TF02sq1pB94+F/cZR571oHnd+xcZGAMDWacXaObbzBrH3vBojc65WUacaHeT6n7I02TXDiL0ZOw5LgtwQHAyAATQAAmStgRheoSKwAIUDZ6LcKFSVGTx17x9zcnN6fDrvqKxxLPy3OlMs+rxADzPeEl6EOud1Guri6lOLzFeGPqjFX4ApvJqM6AnBToMhcAAgQoE5BQABOD1GMpyUYJyb4SQEwGzZW+k1Z4deXw15Ldmzt7OhQX9Omur/p7si5yO6Y+jUHTt3Oaw5vO67GwIDO3a1ICnBoNXoyp3UqmPBNZzjhmDk6xpNYfHkYVxptvVy4r4cvOP7GmOf1NjQkey2M24024o5cY/Ej5x5+Rhehcu0iAwTJ0UEKAARUB97G0ld1Gk+mEf7pG/t7albR6aUceb7swNF/wVPt/obJN+ZllfVyPYPKKQ6pMY4KgABA+AHsCQ4K+AKYt3Y0blNtdNTtNLf+TII2/M7BzFanOjVlTmvFFnzx3xuZ+sfS0/qL9TBNpdxnURSMHR/9k="
                        alt="profile picture"
                        />
                    <textarea 
                        className="form-input" 
                        onChange={this.handleInput} 
                        placeholder={`Whats on your mind, ${this.props.firstname}?`}
                        id="input"
                    ></textarea>
                </div>
                <div className="form-footer">
                    <button onClick={this.handleSubmit}>Submit</button>
                    <p onClick={this.randomPost()}> Generate Post</p>
                    <p>Tag Friend</p>
                    <p>Feeling/Activities</p>
                </div>
            </div>
        );  
    }
}

export default connect(msp, mdp)(PostForm)
//*** to be tested it should work */
