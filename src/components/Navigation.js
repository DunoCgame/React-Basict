import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";


const Navigation = () => {
  return (
		<nav className="main-nav">
		  <ul className="nav">
			<li className="nav-item"><NavLink activeClassName="active" to="/">Home</NavLink></li>
			<li className="nav-item"><Link to="/About">About</Link></li>
		  </ul>
		</nav>
  );
}


export default Navigation;


// https://johnserrano.co/blog/aprende-a-crear-rutas-con-react-router