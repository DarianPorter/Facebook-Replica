import React from 'react';
import PostForm from './post_form';
import PostIndex from './posts_index';

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
                            <PostIndex />
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
