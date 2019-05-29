import { connect } from 'react-redux';
import React from 'react';
// import { Link } from 'react-router-dom';
import LoginBar from './login_bar';
import { login } from '../../../actions/user_actions'

const mapStateToProps = (state)=>{
    return({

    })
}

const mapDispatchToProps = (dispatch)=>{
    return ({
        login: (user_credentials)=>{return dispatch(login(user_credentials))}
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginBar)