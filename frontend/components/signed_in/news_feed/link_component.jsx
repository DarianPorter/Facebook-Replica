import React from 'react';

class LinkComponent extends React.Component{
    constructor(props){
        super(props);
    }
    openLink(){
        return ()=>{
            let win = window.open(this.props.link, '_blank');
            win.focus();
        }
    } 
    render(){  
        return(
            <div onClick={this.openLink()} className="link">
                <img src={this.props.src} alt={this.props.alt}/>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default LinkComponent