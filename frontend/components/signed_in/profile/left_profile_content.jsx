import React from 'react'
import FriendsCompoent  from "./friends";

class ProfileLeftContent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(

            <div className="left-content">
                <FriendsCompoent user={this.props.user}/>
                <div className="blank-left-content">

                </div>
            </div>
        );
    }
}

export default ProfileLeftContent;