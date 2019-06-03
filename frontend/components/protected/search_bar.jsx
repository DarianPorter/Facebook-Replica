import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {  } from "../../actions/user_actions";
const msp = (state, ownProps)=>{
    //watch!!
    return({
        loggedIn: Boolean(state.session.id)
    })
}
const mdp = (dispatch)=>{
    return ({

    })
    // profilepage: dispatch();
}

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            input: ""
        }
    }

    handleInput(type ){
        return (e)=>{
            console.log(this.props)
            this.setState({[type]: e.target.value })
        }
    }
    render(){

        return(
            this.props.loggedIn ?(
                <div className="search-bar">
                    <div className="search-content">
                        <button></button>
                        <input type="text" onChange={this.handleInput("input")}/>
                        <div>pfp* currentusername </div>
                        link to home
                    </div>
                </div>
            ) : (
                null
            )
        )
    }
}

export default connect(msp, mdp)(SearchBar);