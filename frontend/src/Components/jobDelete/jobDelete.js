import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {PageNotFound} from '../Errors.js';
import { Container, Form, FormControl, Button } from 'react-bootstrap';

class jobDelete extends Component{
    constructor(props){
        super(props)
        var job_id = 0
        console.log('props.location.state: ',props.location.state)
        console.log('props.location.pathname: ',props.location.pathname)
        // IF user clicks on the job title at Components/jobSearch/JobCard
        if (props.location.state !== undefined){
            job_id = props.location.state
        }
        // IF user directly tries to hit the page directly from the url bar: http://localhost:3000/jobDetail/JOB_ID  
        // Then retrieve the job_id from the pathname and convert it to an integer
        else{
            var stra = props.location.pathname
            var params = stra.substring(stra.lastIndexOf('/') + 1)
            if ( !isNaN(parseInt(params)) ){
                job_id = parseInt(params)
            }
        }

        this.state = {
            id: job_id,
            filtered_job: null,
            pathname: props.location.pathname
        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount(){
        
    }

    handleDelete(event){
        event.preventDefault()

        console.log('sent state:',this.state.id)
        var url = `http://127.0.0.1:8000/api/jobDelete/${this.state.id}`
        let lookupOptions = {
            method:'GET',
            credentials: "same-origin",
            headers:{
                // "X-CSRFToken": this.getCookie("csrftoken"),
                // "Accept": "application/json",
                "Content-Type": "application/json"
            },
        }
        fetch(url, lookupOptions)
        .then(response => response.json())
        .then(data => console.log('data: ',JSON.stringify(data)))
    }

    render(){
        return(<div>
    <Button onClick={this.handleDelete}> Click to Delete job id:{this.state.id}</Button>
            </div>)
        
    }
}

export default jobDelete;