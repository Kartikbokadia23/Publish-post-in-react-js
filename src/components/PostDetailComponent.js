import React from 'react';

function PostDetail(props){
    console.log(props.post)
    return(
        <div className="min-vh-100 mt-5">
            <h1>{props.post.title}</h1>
            <h4>{props.post.post}</h4>
        </div>
    )
}

export default PostDetail