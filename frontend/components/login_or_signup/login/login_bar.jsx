import React from 'react';
import { Redirect } from 'react-router-dom';

class SignInForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
        };
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type){
        return (e)=>{
            this.setState({[type]: e.target.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        let userInfo = Object.assign({},this.state)
        this.props.login(userInfo);
        <Redirect to="/" />
    }

    render(){

        return(
            <div className="sign-in-bar">
                <div className="content">
                    <div className="mugbook-text">
                        <h1>mugbook</h1>
                    </div>
                    <div >
                        <form className="sign-in-form"> 
                            <label className="input">
                                <p>Email</p>
                                <input 
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.handleInput("email")}> 
                                </input>
                            </label>
                            <br/>
                            <label className="input">
                                <p>Password</p> 
                                <input 
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleInput("password")}> 
                                </input>
                            </label>
                            <button className="submit-button" onClick={this.handleSubmit}> Log in </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignInForm;