import React from 'react';
import {connect} from 'react-redux';

const msp = (state)=>{
    return({

    });
}

const mdp = (dispatch)=>{
    return ({

    });
}

class ProfilePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className="profile-page">
                PFP
            </div>
        )
    }
}

export default connect(msp,mdp)(ProfilePage)