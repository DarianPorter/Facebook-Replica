import React from 'react';

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
        console.log("button pressed");
        let userInfo = Object.assign({},this.state)
        this.props.login(userInfo)
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
                                Email
                                <br/>
                                <input 
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.handleInput("email")}> 
                                </input>
                            </label>
                            <br/>
                            <label className="input">
                                Password
                                <br/>
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