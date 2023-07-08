import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './Components/Navbar/Navabar';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';

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
    <div className="App">
      <Navbar handleNavclick={this.handleNavclick} />
      <header  className="App-header">
        {this.state.currentPage == "Home" ? <Home /> : 
          this.state.currentPage == "Projects" ? <Projects /> : ''
        }
      
       
      </header>
      
    </div>
  );
 }
}

export default App;
