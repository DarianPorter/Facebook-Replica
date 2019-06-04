import React from 'react'
import PostForm from './post_form'

class NewsFeed extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="news-feed">   
                    <div className="n-f-content">
                        <div className="options-sec">
                            
                        </div>
                        <div className="post-sec">
                            <PostForm />
                        </div>
                        <div className="adds-sec">

                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}

export default NewsFeed
