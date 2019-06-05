import { connect } from 'react-redux';
import SignupForm from './signup_form'
import {signup} from '../../../actions/user_actions'

const mapStateToProps = (state)=>{
    return({
        errors: state.errors.userErrors
    })
}

const mapDispatchToProps = (dispatch) =>{
    return({
        signup: (userInfo)=>{ return dispatch(signup(userInfo)) }
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(SignupForm);