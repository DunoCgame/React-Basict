import React, { Component } from "react";
import {BrowserRouter as Router,   Switch,   Route,   Link,   NavLink } from "react-router-dom";
import Hello from "./components/Hello.js";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Images_post from "./components/Images.js";
import MyComponent from "./AxiosPeticion/Call.js";
import logo from './logo.png';
import './App.css';

function About() {
  return (
 
  <div className="ContainnerHome">
  <h2 className="TitleArea">About</h2>
		 <Content 
		title="Articulo"  
		image={logo} 
		texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 				   when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
		/>
  </div>
  
  );
}


function Home() {
  return( 
  
  <div className="ContainnerHome">
	<h2 className="TitleArea">Home</h2>
	<Images_post/>
  </div>
  
  
  );
}






class App extends Component {
  
  // <Hello/>

	
  render(){
		return(
			<div className="containner">
				
				 <Router>
				 <Header/>
					<Switch>
							<Route path="/" exact>
								<Home/>
							</Route> 

							<Route path="/about">
								<About/>
							</Route>
					</Switch>
					
					<footer className="footer">Soy un footer react</footer>
				 </Router>
				 
				 
			</div>
			
		);
	
  }
	
}



export default App;