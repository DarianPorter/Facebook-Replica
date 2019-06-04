import React from 'react'
import { Route, Switch,  Link} from 'react-router-dom'
import LogInSignInPage from './login_or_signup/login_signin_page';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NewsFeed from './signed_in/news_feed/news_feed'
import ProfilePage from './signed_in/profile/profile'
import SearchBar from './signed_in/search_bar'
const App = ()=>{

    return(
        <>
            <Switch>
                <AuthRoute exact path="/signUpLogIn" component={LogInSignInPage} />
                <ProtectedRoute path="/" component={SearchBar}/>
            </Switch>
            <Switch>
                <ProtectedRoute exact path="/users/:user_id" component={ProfilePage} />
                <ProtectedRoute exact path="/" component={NewsFeed} />
            </Switch>
        </>
    );
}

export default App;