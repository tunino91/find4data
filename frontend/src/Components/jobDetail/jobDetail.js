import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {PageNotFound} from '../Errors.js';

class jobDetail extends Component{
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
        this.getData = this.getData.bind(this)
        // console.log('this.state.id: ',this.state.id)
        // console.log('this.state.pathname: ',this.state.pathname)
    }

    getData(){

        var url = `http://127.0.0.1:8000/api/jobDetail/${this.state.id}`
        let lookupOptions = {
            method:'GET',
            credentials: "same-origin",
            headers:{
                // "X-CSRFToken": this.getCookie("csrftoken"),
                // "Accept": "application/json",
                "Content-Type": "application/json",
            },
        }
        fetch(url, lookupOptions)
        .then(response => response.json())
        .then(data => {
            this.setState(
                { 
                    filtered_job: data 
                }
            )
            // console.log('Clicked Job: ',this.state.filtered_job[0])
            // console.log('this.state.filtered_job: ',this.state.filtered_job)
            
            }
        )
    }
    componentDidMount(){
        this.getData()
    }
    render(){

        if (this.state.filtered_job === null){
            return(
                <div>
                    Loading
                </div>
            )
        }
        // If the backend returns an empty object, because it wasnt able to find a job with the id given directly at an url like: http://localhost:3000/jobDetail/STRING THAT CAN NOT BE CONVERTED TO AN INTEGER TO HELP CALL A SPECIFIC JOB WITH IT'S ID.
        else if (Object.keys(this.state.filtered_job).length === 0){
            return(
                <div>
                    <Router>
                        <Route component={PageNotFound}></Route>
                    </Router>
                </div>
            )
        }
        else {
            return(
                <div>
                    {this.state.filtered_job.title}
                </div>
            )
        }
    }
}
export default jobDetail;