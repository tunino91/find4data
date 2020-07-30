import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { render } from '@testing-library/react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

import { Navbar, Nav, NavDropdown, Container, Form, FormControl } from 'react-bootstrap';
import companylogo from './company-logo.svg';


class Header extends Component{

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super()
        this.state = {
          navClass: 'nonback',
        }
        
    }

    componentDidMount(event) {
      // Event Listener for scroll nav bar css class decision
      document.addEventListener("scroll", () => {
        const classNameNav = window.scrollY < 32.5 ? "nonback" : "nonback-shrink";
        const classNameLogin = window.scrollY < 32.5 ? "login-button" : "login-button-shrink";
        this.setState({ 
          navClass: classNameNav,
          loginButtonClass: classNameLogin
         });
      });
    }

    render(){

      const Styles = styled.div`
      
      .navbar-brand, .navbar-nav, .nav-link{
        color: #FFFF00;
      }

      .nonback {
        font-size: 1.3em;
        background: none;
        margin-top: 2.5%;

        font-weight: 600;
        font-family: 'Source Sans Pro';
      }

      .nonback-shrink {
        font-size: 1em;
        height: 50px;
        margin-top: 2.5%;
        font-weight: 600;
        font-family: 'Source Sans Pro';
        // position: fixed;
        // top: 0; 
        
      }

      .top-fix{
        
      }
      .login-button {
        border-color: white;
        border-style: solid;
        margin-right: 50px;
        width: 100px;
        height: 70px;
        text-align: center;
        padding: 8px 0px;
        font-size: 1.15em;
        font-weight: 700;
      }
      .login-button-shrink {
        border-color: white;
        border-style: solid;
        margin-right: 50px;
        width: 100px;
        height: 50px;
        text-align: center;
        padding: 2px 0px;
        font-size: 1em;
        font-weight: 700;
        
      }
      .nav-shift-left {
        margin-right: 100px;
      }
      .nav-shift-left {
        margin-right: 100px;
      }
      .menu-item-spread{
        margin-right: 50px;
      }
      .logo-img{
        margin-left: 20px;
      }
    `   
        return(
            
            <div>
              <Styles>
                
                <Navbar className={this.state.navClass} collapseOnSelect expand="lg" variant="dark">
                  <Navbar.Brand href="/"><img
                    src={companylogo}
                    width="100"
                    height="100"
                    className="d-inline-block align-top logo-img"
                    alt="React Bootstrap logo"
                    
                  /></Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto nav-shift-left">
                      
                      <Nav.Link className="menu-item-spread" href="#home">Home</Nav.Link>
                      <Nav.Link className="menu-item-spread" href="#pricing">Pricing</Nav.Link>
                      <NavDropdown className="menu-item-spread" title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                      </NavDropdown>
                      
                    </Nav>
                    <Nav>
                      <NavDropdown title="Login" className={this.state.loginButtonClass} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#login">Seeker</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#login">Poster</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
                
              </Styles>
              
            </div>
           
        )
    
    }
}


export default Header;