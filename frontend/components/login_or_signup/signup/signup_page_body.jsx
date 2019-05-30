import React from 'react';
import SignupFormContainer from './signup_container';
import SignupBodyBlurb from './signup_blurb';

const SignInBody = () =>{
    return(
        <div className="signup-body">
            <SignupBodyBlurb />
            <SignupFormContainer />
        </div>
    )
}

export default SignInBody;