import React from 'react';
import Post from './old_post index/post'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchAllFriends } from '../../../actions/user_actions'

const msp = (state)=>{
    return({
        friends: state.friends
    })
}

const mdp = (dispatch)=>{
    return({
        fetchFreiends: () => { return dispatch(fetchAllFriends())}
    })
}

class _PostIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchFreiends()
    }

    render(){
        return(
            <div>
                <h1>hello</h1>
            </div>
        )
    }
}
export default withRouter(connect(msp, mdp)(_PostIndex));