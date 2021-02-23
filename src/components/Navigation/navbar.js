import React from 'react';
import {BrowserRouter,Link} from 'react-router-dom';
export default function navbar(){
	return(
		<>
         <nav>
			 <ul>
			 	<li>
              		<Link to="/route1">route1</Link>
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