import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import {PageNotFound} from './Components/Errors.js';
import jobSearch from './Components/jobSearch/jobSearch';
import Profile from './Components/Profile/Profile';
import Post from './Employer/Components/Post';
import jobDetail from './Components/jobDetail/jobDetail';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edite <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{

  // eslint-disable-next-line no-useless-constructor
  constructor(){
    super()
  }

  render(){
    return(
      <div>
          <React.Fragment>
            <Router>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route path="/jobSearch" component={jobSearch}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/post" component={Post}></Route>
                <Route path="/jobDetail" component={jobDetail}></Route>
                <Route component={PageNotFound}></Route>
              </Switch>
            </Router>
          </React.Fragment>
      </div>
    )

  }
}

export default App;
