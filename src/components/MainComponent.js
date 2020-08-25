import React,{Component} from "react";
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Form from './FormComponent';
import Post from './PostComponent';
import PostDetail from './PostDetailComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { addPost } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return{
        posts:state.posts
    }
}
const mapDispatchToProps = dispatch => ({
    addPost:(title, post)=>dispatch(addPost(title, post))
})

class Main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const PostWithId = ({match}) => {
            return(
                <PostDetail post = {this.props.posts.filter((post)=>post.id===parseInt(match.params.id,10))[0]} />
            );
        };
        return(
            <div>
            <Header title = {this.props.posts} />
            <Switch>
                <Route path='/home' component={Home} />
                <Route exact path='/form' component={()=><Form addPost = {this.props.addPost} />} />
                <Route exact path='/post' component={()=><Post post = {this.props.posts} /> } />
                <Route path = '/post/:id' component={PostWithId} />
                {/* <Redirect to="/home" /> */}
            </Switch>
            </div>
        )
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
