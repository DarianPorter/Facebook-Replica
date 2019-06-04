import React from 'react';
import Login from "./login/login_bar_container";
import SigninBody from './signup/signup_page_body';
import Footer from './signup/footer'

class LogInSignInPage extends React.Component {

    render(){

        return(
            <div className="signin-Login">
                <Login />
                <SigninBody />
                <Footer/>
            </div>
        );
    }
}

export default LogInSignInPage