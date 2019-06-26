import React from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"

const msp = (state)=>{
    return({

    })
}

const mdp =(dispatch)=>{
    return ({

    })
}


class LeftSection extends React.Component{
    constructor(props){
        super(props)
    }
    
    goToProfile (){

    }

    render(){
        return(
            <>

            </>
        )
    }
}

export default withRouter(connect(msp,msp)(LeftSection))