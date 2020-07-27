import React, {Component} from 'react'
import themeHeader from '../../themes.js';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from '../Home/Header';
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link, NavLink, Route, Switch  } from  'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import InputGroup from 'react-bootstrap/InputGroup';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import JobCard from './JobCard'
import Box from '@material-ui/core/Box';
import MiniDrawer from './MiniDrawer';
import { LOADED_DATA } from 'video-react/lib/actions/video';

//// This is the function way of receiving the props(searched entity in home page)
// const jobSearch = (props) => {
//     console.log('props: ',props.location.state.title)
//     return (
//       <h3>{props.location.state.title}</h3>
//     );
//   };
// export default jobSearch;


//// This is the class way of receiving the props(searched entity in home page)
// class jobSearch extends Component{
class jobSearch extends Component{

    constructor(props){
        super(props)
        // The title_from home is the searched entity in the home page.
        // If user searched at the homepage, the prop will be carrying that information. 
        var title_from_home = ''
        if (props.location.state !== undefined){
            console.log('props: ',props)
            title_from_home = props.location.state.title
        }
        this.state = {
            activeSearch: {
                id: null,
                title: title_from_home,
            },
            activeSearchLocation: {
                id: null,
                title: ''
            },
            autoFocus: 'false',
            allJobs: []
        }
        this.handleSearchChange = this.handleSearchChange.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.getCookie = this.getCookie.bind(this)
        this.getData = this.getData.bind(this)
    }
    componentDidMount(){
        this.getData()
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
    getData(){
        console.log('this.state.activeSearch.title = ',this.state.activeSearch.title)
        var url = `http://127.0.0.1:8000/api/jobSearch/`
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
                { allJobs: data }
                )
            console.log('All the Jobs: ',this.state.allJobs)
            console.log('JOB ID:',this.state.allJobs[0].id)
            }
        )
    }

    handleSearchChange(event){
        
        const { name,value } = event.target
        
        this.setState({
            [name]: {
            ...this.state.name,
            title: value,
            },

        })
    }
    handleFocus(event){
        const {name} = event.target
        console.log('clicked')
        this.setState({autoFocus:'true'})
        console.log(this.state.autoFocus)
    }

    render(){
        const num_of_jobcards_dummy = [1,2,3,4,5,6,7,8,9,10];
        return(
            <div>
                {/* NAVIGATION HEADER */}
                {/* <div className="bg">
                    <ThemeProvider theme={themeHeader}>
                        <Header />
                    </ThemeProvider>
                </div> */}
                {/* END NAVIGATION HEADER */}
                {/* Navigation Experiment: Material UI */}
                <div>
                    <MiniDrawer />
                    {/* <Bar /> */}
                </div>

                {/* SEARCH BARS */}
                
                    <div className="search-bar" style={{marginTop:"10%"}}>
                    
                        <Form>
                            <Form.Group>
            
                                <div className="search-multi">
                                
                                    <div className="search-inline">
                                    <Box boxShadow={20}>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <SearchIcon name='job'/>
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control id='bar-size' onChange={this.handleSearchChange} name='activeSearch' value={this.state.activeSearch.title} type="text" placeholder="Data Engineer, Data Analyst, Machine Learning Engineer, Data Visualization" />
                                        </InputGroup>
                                        </Box>
                                    </div>
                                    {/* <Button onClick={this.handleFocus} name='location'></Button> */}
                                    
                                    <div className="search-inline">
                                    <Box boxShadow={20}>
                                    
                                        <InputGroup>
                                        
                                            <InputGroup.Prepend>
                                            
                                                <InputGroup.Text >
                                                
                                                    <LocationOnIcon />
                                                
                                                </InputGroup.Text>
                                                
                                            </InputGroup.Prepend>
                                            <Form.Control Focus={this.state.autoFocus} id='bar-size' onChange={this.handleSearchChange} name='activeSearchLocation' value={this.state.activeSearchLocation.title} type="text" placeholder="Set Location" />
                                            <InputGroup.Append>
                                                <Button variant="outline-primary">
                                                    <Link to={{
                                                        pathname: "/jobSearch",
                                                        state: this.state.activeSearch
                                                        }}>
                                                    </Link>
                                                    Search
                                                </Button>
                                        
                                            </InputGroup.Append>
                                        </InputGroup>
                                        </Box>
                                    </div>
                                </div>                 
                            </Form.Group> 
                        </Form>        
                    </div>
                
                {/* END SEARCH BARS */}
                
                <div className='searched-job-posts-container'>
                    
                    {this.state.allJobs.map( (singleJob) => <JobCard className='JobCard' job_id={singleJob.id} title={singleJob.title} date_created={singleJob.date_created} description={singleJob.description}></JobCard> )}
                    
                </div>
                {/* <MiniDrawer /> */}
            </div>
        )
    }


}
export default jobSearch;