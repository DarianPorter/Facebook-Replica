import React from 'react'
import LogInSignInPage from './login_or_signup/login_signin_page';

class App extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <LogInSignInPage />
            </>
        );
    }

}

export default App;