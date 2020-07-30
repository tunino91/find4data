import React,{Component} from 'react';
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from  'react-router-dom';

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            company: '',
            bio: '',
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

    handleChange(event){
        const { name, value } = event.target
        this.setState({
                ...this.state,
                [name]: value,
            }
        )
    }

    handleClick(event){
        event.preventDefault()
        console.log('sent state:',this.state)
        var url = `http://127.0.0.1:8000/register/`
        let lookupOptions = {
            method:'POST',
            credentials: "same-origin",
            headers:{
                // "X-CSRFToken": this.getCookie("csrftoken"),
                // "Accept": "application/json",
                "Content-Type": "application/json"
            },
            
            body: JSON.stringify(this.state)
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
                    {/*EMAIL FIELD*/}
                    <Form.Group controlId="formBasicSearch">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={this.handleChange} name='email' value={this.state.email} type="text" placeholder="Email" />
                    </Form.Group>
                    {/*USERNAME FIELD*/}
                    <Form.Group controlId="formBasicSearch">
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={this.handleChange} name='username' value={this.state.username} type="text" placeholder="Username" />
                        <Form.Text className="text-muted">
                        {/* Search things like:  */}
                        </Form.Text>
                    </Form.Group>
                    {/*PASSWORD FIELD*/}
                    <Form.Group controlId="formBasicSearch">
                        <Form.Label>Password</Form.Label>
                        {/* <Form.Control onChange={this.handleChange} name='active' value={this.state.active.description} type="text" placeholder="Please explain the jobs' duties" /> */}
                        <Form.Control onChange={this.handleChange} name='password' value={this.state.password} type="text" placeholder="Password" />
                        <Form.Text className="text-muted">
                        {/* Search things like:  */}
                        </Form.Text>
                    </Form.Group>
                    {/*COMPANY FIELD*/}
                    <Form.Group controlId="formBasicSearch">
                        <Form.Label>Company</Form.Label>
                        {/* <Form.Control onChange={this.handleChange} name='active' value={this.state.active.description} type="text" placeholder="Please explain the jobs' duties" /> */}
                        <Form.Control onChange={this.handleChange} name='company' value={this.state.company} type="text" placeholder="Company" />
                    </Form.Group>
                    {/*BIO FIELD*/}
                    <Form.Group controlId="formBasicSearch">
                        <Form.Label>Bio</Form.Label>
                        {/* <Form.Control onChange={this.handleChange} name='active' value={this.state.active.description} type="text" placeholder="Please explain the jobs' duties" /> */}
                        <Form.Control onChange={this.handleChange} name='bio' value={this.state.bio} type="text" placeholder="Bio" />
                    </Form.Group>

                    <Button onClick={this.handleClick} variant="primary">
                        Register
                    </Button>
                    
                </Form>
            </div>
        )
    }
}

export default Register;

