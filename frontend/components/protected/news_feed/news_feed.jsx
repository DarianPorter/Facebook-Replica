import React from 'react'
import PostForm from './post_form'
import SearchBar from '../search_bar'


class NewsFeed extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <SearchBar/>
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
