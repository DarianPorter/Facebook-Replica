import React from 'react';
import {connect} from 'react-redux'
import { logoutUser } from "../../actions/user_actions";

const msp = (state, ownProps)=>{
    //watch!!
    return({
        loggedIn: Boolean(state.session.id),
        fullName: state.entities.users[state.session.id]
    })
}
const mdp = (dispatch)=>{
    return ({
        logout: ()=>{ 
            debugger
            return dispatch(logoutUser())
        }
    })
}

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            input: ""
        }
        this.logout = this.logout.bind(this)
    }

    handleInput(type ){
        return (e)=>{
            this.setState({[type]: e.target.value })
        }
    }

    logout(e){
        debugger
        e.preventDefault();
        this.props.logout();
    }
    render(){

        return(
            this.props.loggedIn ?(
                <div className="search-bar">
                    <div className="search-content">
                        <div className="f-and-search">
                            <img 
                                src="https://www.freeiconspng.com/uploads/facebook-f-logo-white-background-21.jpg" 
                                alt="f"
                                className="f-btn"
                            />
                            <input 
                                type="text" 
                                onChange={this.handleInput("input")}
                                placeholder="Search"
                            />
                        </div>
                        <div className="nav-btn">
                            <div className="profile-btn">
                                <img
                                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFoAhwMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQQFBgIDB//EADIQAAIBAwMCBAIJBQAAAAAAAAABAgMEEQUhMRJBIlFhcRORNGJygaGxwdHhIzIzQlL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgMBBP/EABsRAQEAAwEBAQAAAAAAAAAAAAABAhExIVES/9oADAMBAAIRAxEAPwD9DQDCPQzVBoABwUEyAwWMZTfTCLk32SyZWn2bu55eY04vd+fob2jQp0I9NKCivTuRllp2RoqemXU9+hRX1ng8Xdq7XEZ1Iym/9Y52OlMW8s6V1HxrE1xNcomZ++u/lzaKfSvRnb1XTqLdcPz9T5mqU4ZVuUmdtgDQGQAYAAIBMAR7AvJAKAgBv9Iio2EGly238zNzkxNL+gUl7/mzLML1c4oAOOtTr0V0UpY3UmvwNObrXd6NL7b/ACNLg2w4i9VcAIFODJ2KyY2AqAQAYHsCYAoAbAgYSLgDqLWnGlQhCGelLbJ9TF02sq1pB94+F/cZR571oHnd+xcZGAMDWacXaObbzBrH3vBojc65WUacaHeT6n7I02TXDiL0ZOw5LgtwQHAyAATQAAmStgRheoSKwAIUDZ6LcKFSVGTx17x9zcnN6fDrvqKxxLPy3OlMs+rxADzPeEl6EOud1Guri6lOLzFeGPqjFX4ApvJqM6AnBToMhcAAgQoE5BQABOD1GMpyUYJyb4SQEwGzZW+k1Z4deXw15Ldmzt7OhQX9Omur/p7si5yO6Y+jUHTt3Oaw5vO67GwIDO3a1ICnBoNXoyp3UqmPBNZzjhmDk6xpNYfHkYVxptvVy4r4cvOP7GmOf1NjQkey2M24024o5cY/Ej5x5+Rhehcu0iAwTJ0UEKAARUB97G0ld1Gk+mEf7pG/t7albR6aUceb7swNF/wVPt/obJN+ZllfVyPYPKKQ6pMY4KgABA+AHsCQ4K+AKYt3Y0blNtdNTtNLf+TII2/M7BzFanOjVlTmvFFnzx3xuZ+sfS0/qL9TBNpdxnURSMHR/9k="
                                    alt="pfp"
                                    className="search-bar-pic"
                                /> 
                                <p> {`${this.props.fullName.firstname}`} </p> 

                            </div>
                            <div className="home-btn">
                                <p> Home </p>
                            </div>
                            <div className="logout" onClick={this.logout}>
                                <p> Logout </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                null
            )
        )
    }
}

export default connect(msp, mdp)(SearchBar);