import React from 'react';
import {Redirect} from 'react-router-dom';
import faker from 'faker'

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
        this.handleInput = this.handleInput.bind(this);
    }
    parseDate(){
        let date = faker.date.past();
        let year = '' + date.getFullYear();
        let month = '' + (date.getMonth() + 1)
        let day = '' + date.getDate()
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year, month, day].join('-');
    }

    getRandomGender(){
        let gender = Math.round(Math.random()) == 0 ? "male" : "female";
        document.getElementById(gender).checked = true;
        return gender;
    }
    handleSubmit(userinfo) {
        return (e) => {
            e.preventDefault();
            this.props.signup(userinfo);
            <Redirect to="/" />
        }
    }

    createFakeVals(){
        return {
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            birthday: this.parseDate(),
            gender: this.getRandomGender()
        }
    }

    setStateWithFakeInput(fakeVals){
        this.setState(fakeVals)
    }

    setInput(fakeVals){
        document.getElementById("f-name").value = fakeVals.firstname
        document.getElementById("l-name").value = fakeVals.lastname
        document.getElementById("email").value = fakeVals.email
        document.getElementById("passcode").value = fakeVals.password
        document.getElementById("birthday").value = fakeVals.birthday

    }

    create(){
        return ()=>{
            let fakeVals = this.createFakeVals();
            this.setStateWithFakeInput(fakeVals);
            this.setInput(fakeVals)
        }
    }
    
    handleInput(type){
        return (e)=>{
            this.setState({[type]: e.target.value});
        }
    }

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
                    <input type="text" onChange={this.handleInput("firstname")} placeholder="First name" id="f-name"/> <br/>
                    {/* {this.handleErrors("Firstname")} */}
                    <input type="text" onChange={this.handleInput("lastname")} placeholder="Last name" id="l-name"/>
                </div>
                <input type="text" onChange={this.handleInput("email")} placeholder="Email" id="email"/>
                <input type="password" onChange={this.handleInput("password")} placeholder="Password" id="passcode"/>
                <br/>
                <label>
                    Birthday <br/>
                    <input type="date" id="birthday" onChange={this.handleInput("birthday")} />
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
                <button 
                    className="fake-user-btn signup-btn"
                    onClick={this.create()}
                >Create fake Info</button>
            </div>
        );
    }
}

export default SignUpForm;