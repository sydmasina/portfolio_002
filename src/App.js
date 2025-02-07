import React, { Component } from 'react'
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './Components/Navbar/Navabar';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import { Box } from '@mui/material';

class App extends Component {
  static defaultProps = {
    pages: ['Home', 'About', 'Projects', 'Contact']
  }
  constructor(props){
    super(props);
    this.state = {
      currentPage: "Home"
    }
    this.handleNavclick = this.handleNavclick.bind(this)
  }
  handleNavclick(evnt, pageName){
    console.log("Handling click on parent....")
    if(pageName !== this.state.currentPage){
      this.setState({currentPage: pageName})
    }
  }
 render(){
  return (
    <Box  className="App">
      <Navbar handleNavclick={this.handleNavclick} />
      <header  className="App-header">
        {this.state.currentPage === "Home" ? <Home handleNavclick={this.handleNavclick}/> : 
          this.state.currentPage === "Projects" ? <Projects /> : 
          this.state.currentPage === "About" ? <About/> : 
          this.state.currentPage === "Contact" ? <Contact/> : ''
        }
      
       
      </header>
      
    </Box>
  );
 }
}

export default App;
