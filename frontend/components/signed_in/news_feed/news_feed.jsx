import React from 'react';
import PostForm from './post_form';
import PostIndex from './posts_index';
import NFLeftSec from './left_news_feed_sec'

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
                            <NFLeftSec />
                        </div>
                        <div className="post-sec">
                            <PostForm />
                            <PostIndex usersPage={false}/>
                        </div>
                        <div className="adds-sec">
                            <div>
                                <p>Sponsored</p> <p>Create Ad</p>
                            </div>
                            <img 
                                src={window.fake_add} 
                                alt="add"
                                onClick={() => { window.open("https://darianporter.github.io/", '_blank').focus();}}
                            />
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}

export default NewsFeed
