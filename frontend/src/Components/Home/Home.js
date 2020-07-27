import React, {Component} from 'react';
import Header from './Header';

import themeHeader from '../../themes.js';
import { ThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link, NavLink, Route, Switch  } from  'react-router-dom';
import jobSearch from '../jobSearch/jobSearch';
import MiniDrawer from '../jobSearch/MiniDrawer';
import ReactPlayer from 'react-player'
import gLogo from '../../Assets/gLogo.webp';
import QierPlayer from 'qier-player';
import VideoPlayer from './VideoPlayer'
import {
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton
  } from 'video-react';

class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            activeSearch: {
                id: null,
                title: '',
            },
            api: '',
            completedSearch: '',
        }
        this.handleSearchChange = this.handleSearchChange.bind(this)
        this.fetchApi = this.fetchApi.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.getCookie = this.getCookie.bind(this)
    }
    componentWillMount(){
      this.fetchApi()
    }
    fetchApi(){

      fetch('http://127.0.0.1:8000/api/')
      .then(response => response.json())
      .then(data => (
        this.setState({
            ...this.state,
            api: JSON.stringify(data)
      })))
    //   fetch('http://127.0.0.1:8000/api/')
    //   .then(response => response.json())
    //   .then(data => 
    //     console.log('data: ',data))
      
    }  
    handleSearchChange(event){
        
        const {value} = event.target
        console.log(value)
        this.setState({
            activeSearch: {
            ...this.state.activeSearch,
            title: value,
            }
        })

        console.log(this.state.activeSearch)
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
    handleClick(event){
        event.preventDefault()
        console.log('you pressed')
        var url = `http://127.0.0.1:8000/api/jobSearch/${this.state.activeSearch.title}/`
        let lookupOptions = {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
            // mode: 'no-cors',
        }
        
        fetch(url, lookupOptions)
        .then(response => response.json())
        .then(data => (
            this.setState({
                ...this.state,
                completedSearch: JSON.stringify(data)
                }
            )
            )
        )

        fetch(url)
        .then(response => response.json())
        .then(data => (
            console.log('jobSearch: ',data)
            )
        )

        // var csrftoken = this.getCookie('csrftoken');
        // var url = `http://127.0.0.1:8000/api/jobSearch/${this.state.activeSearch.title}`

    }




    render(){
        
    //// STYLES ISSUE: WHEN USED, THE MOUSE DISFOCUS WITH EVERY TYPED LETTER INTO THE SEARCH BAR
    //     const Styles = styled.div`
      
    //   .nonback {
    //     background: none;
    //   }
    //   .bg {
    //     background: url(../../Assets/background.jpg) no-repeat center center fixed; 
    //     -webkit-background-size: cover;
    //     -moz-background-size: cover;
    //     -o-background-size: cover;
    //     background-size: cover;
    //   }
    //   .search-bar{
    //       width: 40%;
    //       margin-left: 200px;
    //       margin-top: 15%;

    //   }
    // `
        return(
            <div className="bg">
                <ThemeProvider theme={themeHeader}>
                    <Header />
                </ThemeProvider>

                
                {/* <Styles> */}
                    <div className="search-bar">
                        <Form>
                            <Form.Group controlId="formBasicSearch">
                                <Form.Label>Job Search</Form.Label>
                                <Form.Control onChange={this.handleSearchChange} value={this.state.activeSearch.title} type="text" placeholder="Data Engineer, Data Analyst, Machine Learning Engineer, Data Visualization" />
                                <Form.Text className="text-muted">
                                Search things like: 
                                </Form.Text>
                            </Form.Group>
                            
                            {/* <NavLink to={{
                                pathname:`../jobSearch/`,
                                state: this.state.activeSearch
                                }}>
                                <Button variant="primary" type="submit">
                                    Search
                                </Button>
                            </NavLink> */}
                            
                                <Link to={{
                                    pathname:"/jobSearch",
                                    state:this.state.activeSearch
                                }}>
                                    <Button variant="primary">
                                        Props throguh render
                                    </Button>
                                </Link>
                                {/* <Route 
                                    exact path="/jobSearch" 
                                    render={(props) => <jobSearch {...props} 
                                    title={`Props through render`} />} /> */}


                            {/* <Button onClick={this.handleClick} variant="primary" type="submit">
                                Search
                            </Button> */}
                        </Form>
                        <input type="text" value={this.state.api}></input>
                    </div>
                {/* </Styles> */}
                <Player autoPlay src='https://www.porntrex.com/get_file/10/358caa558a9e419cbfd3e21776363f5bdfafae53e7/923000/923902/923902_360p.mp4/'>

                </Player>
                    <VideoPlayer />
                <QierPlayer srcOrigin="https://www.porntrex.com/get_file/10/4d5b90f0bd7b6252a22aa60fab0bc19f6588004d02/923000/923902/923902_720p.mp4/" />
                <ReactPlayer url='https://www.porntrex.com/get_file/10/4d5b90f0bd7b6252a22aa60fab0bc19f6588004d02/923000/923902/923902_720p.mp4/' controls/>

                <video>
                <source src='https://www.porntrex.com/get_file/10/358caa558a9e419cbfd3e21776363f5bdfafae53e7/923000/923902/923902_360p.mp4/' type="video/mp4"/>
                </video>

                {/* <ReactPlayer url='https://www.porntrex.com/embed/1202904' playing>
                
      
                </ReactPlayer> */}

                {/* <Player playsInline
      poster="/assets/poster.png"
      src="https://www.porntrex.com/embed/1202904"
    /> */}

    
            </div>
        )
    }
}
export default Home;