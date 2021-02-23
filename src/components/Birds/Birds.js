import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import BirdForm from './BirdForm';
import '../../App.css'
import {incrementBird} from '../../store/birds/birds'
export default function Birds(){
	const birds = [...useSelector(state => state.birds)].sort((a,b)=>{return a.name.toLowerCase()>b.name.toUpperCase()?1:-1});
	const dispatch=useDispatch();

	return(
		<div className="wrapper">
			<h1>Bird List</h1>
            <BirdForm/>
			<ul>
				{birds.map(birds=>(
					<li key={birds.name}>
						<h3>{birds.name}</h3>
						<div>views:{birds.views}
						<button onClick={()=>dispatch(incrementBird(birds.name))}><span role='img' areia-label='add'>+</span></button>
						</div>
					</li>
				)
				)}
			</ul>
		</div>
	)
}