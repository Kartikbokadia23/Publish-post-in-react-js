import React from 'react'
import { Link } from 'react-router-dom';

function Post(props){
    //console.log(props)
    if(props.post==null){
        return(<div></div>)
    }
    return(
    <div className='container card-container col-12 pt-3 min-vh-100'>
        <h4 className="mb-4"> Posts </h4>
        <div className='post-card'>
                    {props.post.map((post) => {
                        return (

                            <div className="cards mb-5 pt-3 px-3" key={post.id}>
                            <Link to={`/post/${post.id}`}>
                            <img src="/pencil.jpg" width="60px" className="card-image"></img>
                            <p className="title">-- {post.title} --</p>
                            <p className="h-50">{post.post}</p>
                            {/* {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(post.date)))} */}
                            </Link>
                            </div>
                        );
                    })}
        </div>
    </div>
    )
}


export default Post;