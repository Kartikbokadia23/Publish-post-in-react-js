import React,{Component} from 'react';
import { Link } from 'react-router-dom';



function Titles(props){
    const filtered = props.post.filter((title)=>{
        return props.title.includes(title.title)
    })
    //console.log(filtered)
    return(
        <div className='col-12 col-md-5 m-1 d-flex mx-auto'>
        <ul className='list-unstyled text-center'>
                    {filtered.map((post) => {
                        return (
                            
                            <li key={post.id}>
                            <Link to={`/post/${post.id}`}>
                            <h4 style={{color:"black"}}>-- {post.title}--</h4>
                            <p style={{color:"black"}}>{post.post}</p>
                            <br/>
                            {/* {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(post.date)))} */}
                            </Link>
                            </li>
                            
                        );
                    })}
        </ul>
        </div>
    )
}


class Header extends Component{
    constructor(props){
        super(props)
        // var titles=[]
        // this.props.title.map((item)=>{
        //     titles.push(item.title)
        // })
        // var titles = this.props.title.map((item)=>{
        //     return item.title
        // })
        this.state={
            searchText : "",
            titles:
            this.props.title.map((item)=>{
                return item.title
            })
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const {name,value}=event.target
        this.setState({
            [name]:value,
            titles:
            this.props.title.map((item)=>{
                return item.title
            })
        })
    //    console.log(this.props)
        console.log(this.state.titles)
    }
    dynamicSearch=()=>{
        return this.state.titles.filter((title)=>title.toLowerCase().includes(this.state.searchText.toLowerCase()))
    }
    render(){
        return(
            <React.Fragment>
            <div className="mt-2">
                <form className="search-div">
                    <i className = "fa fa-search ml-2"></i>
                    <input type="text" className="search-text ml-2" value={this.state.searchtext} name="searchText" placeholder="Search Post"
                    onChange={this.handleChange} />
                </form>
            </div>
            <div className="nav-buttons my-4">
                <Link to='/home' className="nav-btn">Home</Link>
                <Link to='/form' className="nav-btn">Add Post</Link>
                <Link to='/post' className="nav-btn">View Post</Link>
            </div>
            {this.state.searchText!=""?
            <Titles title = {this.dynamicSearch()} post={this.props.title}/>
            :
            <div></div>
            }
            </React.Fragment>
        )
    }
}

export default Header;