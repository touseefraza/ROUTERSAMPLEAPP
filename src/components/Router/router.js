import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Route1 from '../Route1/route1'
import Route2 from '../Route2/route2'
import Route3 from '../Route3/route3'
import Post from "../Route1/post"
export default function router(){
	return(
      <div>
	  <Switch>
	  <Route path="/route1">
         <Route1 />
	   </Route>
	   <Route path="/route2">
         <Route2/>
	   </Route>
	   <Route path="/route3">
         <Route3 path="/route3"/>
	   </Route>
	   <Route path="/Home">
         <Post path="/Home"/>
	   </Route>
	   </Switch>
	  </div>
	);
}