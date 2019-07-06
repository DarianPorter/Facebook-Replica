import React from 'react'

class PostComment extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

        return (
            <div className="comment">
                <div className="author-image">

                </div>
                <div>
                    <div className="author-comment">
                        <p></p>{this.props.comment.body}
                    </div>
                    <div className="comment-actions">
                        <p>Like</p> <p> · </p> <p> Reply </p> <p> · </p> <p> 6m </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostComment