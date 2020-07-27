import React, {Component} from 'react'
import themeHeader from '../../themes.js';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from '../Home/Header';
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link, NavLink, Route, Switch  } from  'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import InputGroup from 'react-bootstrap/InputGroup';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import VideoPlayer from './VideoPlayer';

class Profile extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className='bg'>
                    
                    {/* <ThemeProvider theme={themeHeader}>
                        <Header />
                    </ThemeProvider> */}
                    {/* <video autoPlay width="750" height="500" controls >
                    
                        <source src="https://spankbang.com/9a2fa74b-3e9a-41ff-889d-f58d866a0549" />
                    </video> */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/SmrHePFVFho" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        )
    }
}

export default Profile;