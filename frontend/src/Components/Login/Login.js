import React, { Component } from "react";
import jobSearch from "../jobSearch/jobSearch";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('sent state:',this.state)
        var url = `http://127.0.0.1:8000/register/login/`
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
    }

    render() {
        return (
            <div>Login
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Password:
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export default Login;