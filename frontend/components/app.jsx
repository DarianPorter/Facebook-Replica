import React from 'react'
import { Route, Switch, Link} from 'react-router-dom'
import LogInSignInPage from './login_or_signup/login_signin_page';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NewsFeed from './protected/news_feed/news_feed'

const App = ()=>{

    return(
        <>
            <Switch>
                <AuthRoute exact path="/signUpLogIn" component={LogInSignInPage} />
                <ProtectedRoute exact path="/" component={NewsFeed} />
            </Switch>
        </>
    );
}

export default App;