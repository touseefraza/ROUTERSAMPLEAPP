import React from 'react';
import { useParams } from 'react-router-dom';
import Child1 from './child1';
import Child2 from './child2';
export default function Route1(){
	const {type}=useParams();
	return(
		<div>
			<h1>router 1</h1>
			{type=='child1' && <Child1/>}
			{type=="child2"&& <Child2/>}
		</div>
	);
}