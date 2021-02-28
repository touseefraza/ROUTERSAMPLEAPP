import React from 'react';
import {BrowserRouter,Link} from 'react-router-dom';
import logo from './logo.jpg'
import "../../App.css"
export default function navbar(){
	return(
		<>
         <nav class="nav">
			 <ul>
			 <li>
			 <a class="navbar-brand" href="#">
  			  <img src={logo} alt="Logo" style={{width:40}}/>
              </a>
			  </li>
			 	<li>
              		<Link to="/route1">Home</Link>
			 	</li>
				 <li>
              		<Link to="/route2">Route2</Link>
			 	</li>
				 <li>
              		<Link to="/route3">route3</Link>
			 	</li>
			</ul>
		 </nav>
		</>
	);
}