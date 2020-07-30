import React,{Component} from 'react';
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from  'react-router-dom';

class Post extends Component{
    constructor(props){
        super(props)
        this.state = {
            active:{
                title:'',
                description:'',
            },
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.getCookie = this.getCookie.bind(this)
    }
    getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    // handleChange(event){
    //     const { name, value } = event.target
    //     this.setState({
    //         [name]: {
    //             ...this.state.active,
    //             description: value
    //         }
    //     })
    // }
    handleChange(event){
        const { name, value } = event.target
        this.setState({
            active: {
                ...this.state.active,
                [name]: value,
            }
        })
    }

    handleClick(event){
        event.preventDefault()
        var url = `http://127.0.0.1:8000/api/post-new-job/`
        let lookupOptions = {
            method:'POST',
            credentials: "same-origin",
            headers:{
                "X-CSRFToken": this.getCookie("csrftoken"),
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state.active)
        }
        fetch(url, lookupOptions)
        .then(response => response.json())
        .then(data => console.log('data: ',JSON.stringify(data)))
        // TODO: Use the window.location.assign to redirect the page to somewhere else.
        // window.location.assign('http://localhost:3000/')
    }
    render(){
        return(
            <div>
                <Form>
                    {/*TITLE*/}
                    <Form.Group controlId="formBasicSearch">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control onChange={this.handleChange} name='title' value={this.state.active.title} type="text" placeholder="Job Title" />
                        <Form.Text className="text-muted">
                        Search things like: 
                        </Form.Text>
                    </Form.Group>
                    {/*DESCRIPTION*/}
                    <Form.Group controlId="formBasicSearch">
                        <Form.Label>Job Description</Form.Label>
                        {/* <Form.Control onChange={this.handleChange} name='active' value={this.state.active.description} type="text" placeholder="Please explain the jobs' duties" /> */}
                        <Form.Control onChange={this.handleChange} name='description' value={this.state.active.description} type="text" placeholder="Please explain the jobs' duties" />
                        <Form.Text className="text-muted">
                        Search things like: 
                        </Form.Text>
                    </Form.Group>
                    
                    <Link to={{
                        pathname:"/jobSearch",
                        state:this.state.active
                    }}>
                        <Button onClick={this.handleClick} variant="primary">
                            Post
                        </Button>
                    </Link>
                </Form>
            </div>
        )
    }
}

export default Post;

