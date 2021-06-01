import React from "react";
import Navigation from "./Navigation.js";


import Home from "./Home.js";
import logo from './logo.svg';


const Header=()=>{
		return(
		
		
			<header className="header">
				<center>
					<img src={logo} className="App-logo" alt="logo" width="100px" height="100px"/>
				</center>
				 <h1 className="tilte">React web</h1>
				<Navigation/>
			</header>
			
		
		
		);

}

export default Header;