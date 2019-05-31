import React from 'react';

class SignUpForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            birthday: "",
            gender: null
        }
    }

    handleSubmit(userinfo) {
        return (e) => {
            e.preventDefault();
            this.props.signup(userinfo)
        }
    }
    
    handleInput(type){
        return (e)=>{
            this.setState({[type]: e.target.value});
            console.log(this.state);
        }
    }
    // handleErrors(input){
    //     let empty = Object.keys(this.props.errors).length == 0
    //     return empty == true ? null :
    //     <ul>
    //         {this.props.errors.map((error)=>{
    //            return <li> {error.includes(input) ? error : null} </li>
    //        })}
    //     </ul>
    // }
    handleErrors(){
        let empty = Object.keys(this.props.errors).length == 0
        return empty == true ? null :
        this.props.errors.map((error)=>{
            return <li> {error} </li>
        })
    }
   
    render(){

        return(
            <div className="signup-form">
                <h1> Sign Up </h1>
                <h3>it's free and always will be</h3>
                <div className="errors"> <ul> {this.handleErrors()} </ul> </div>
                <div className="f-l-name">
                    <input type="text" onChange={this.handleInput("firstname")} placeholder="First name"/> <br/>
                    {/* {this.handleErrors("Firstname")} */}
                    <input type="text" onChange={this.handleInput("lastname")} placeholder="Surname"/>
                </div>
                <input type="text" onChange={this.handleInput("email")} placeholder="Email" />
                <input type="password" onChange={this.handleInput("password")} placeholder="Password"/>
                <br/>
                <label>
                    Birthday <br/>
                    <input type="date" onChange={this.handleInput("birthday")} />
                </label>
                <div>
                    <label>
                        Male
                        <input id="male" type="radio" name="gender" value="male" onChange={this.handleInput("gender")}/>
                    </label>
                    <label>
                        Female
                        <input id="female" type="radio" name="gender" value="female" onChange={this.handleInput("gender")} />
                    </label>
                </div>
                <div>
                    <p>
                        By clicking Sign Up, you agree to our Terms, 
                        Data Policy and Cookie Policy. You may receive 
                        SMS notifications from us and can opt out at any time.
                    </p>
                </div>
                <button 
                    className="signup-btn"
                    onClick={this.handleSubmit(this.state)}
                    >Sign up</button>
            </div>
        );
    }
}

export default SignUpForm;