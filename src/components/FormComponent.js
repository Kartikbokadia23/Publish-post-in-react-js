import React,{Component} from 'react'

class Form extends Component{
    constructor(props){
        super(props)
         this.state={
             title:"",
             post:""
         }
         this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     handleChange(event){
         const {name,value}=event.target
         this.setState({
             [name]:value
         })
     }
    handleSubmit(event) {
        alert('Hurrah!!! Your post was successfully Published.');
        this.props.addPost(this.state.title,this.state.post);
        // event.preventDefault();
    }
    render(){
        return (
            // <div className="container col-md-10 form-comp">
            <div className="form-comp min-vh-75">
            <div className="col-md-4">
                <img src="/forms.svg" width="400px" className="form-img ml-5"></img>
            </div>
            <form className="col-md-8 py-4" onSubmit={this.handleSubmit}>
                <h4 className="col-md-2 offset-md-3 text-left mb-2 pl-0 form-label" htmlFor="title">Title</h4>
                <div>
                    <input className="col-md-6 form-input-1" type="text" value={this.state.title} name="title" placeholder="Title Name" 
                    onChange={this.handleChange} />
                </div>
                <br />
                <h4 className="col-md-2 offset-md-3 text-left mb-2 pl-0 form-label" htmlFor="post">Post</h4>
                <div>
                    <textarea className="col-md-6 form-input-2" value={this.state.post} name="post" rows="10" placeholder="write your post here ..."
                    onChange={this.handleChange} />
                </div>
                <br />
                <button className="mb-1 form-btn" type="submit">Publish</button>
            </form>
            </div>
        )
    }
}

export default Form;