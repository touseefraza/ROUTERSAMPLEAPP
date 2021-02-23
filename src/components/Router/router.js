import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Route1 from '../Route1/route1'
import Birds from '../Birds/Birds'
import Route3 from '../Route3/route3'
export default function router(){
	return(
      <div>
	  <Switch>
	  <Route path="/route1">
         <Route1 />
	   </Route>
	   <Route path="/route2">
         <Birds/>
	   </Route>
	   <Route path="/route3">
         <Route3 path="/route3"/>
	   </Route>
	   </Switch>
	  </div>
	);
}