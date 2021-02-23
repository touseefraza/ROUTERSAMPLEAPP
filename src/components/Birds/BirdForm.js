import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {addBird} from '../../store/birds/birds';
export default function BirdForm(){
	const [birdName,setBird]=useState('');
	const dispatch = useDispatch();
	const handleSubmit = event => {
		console.log(birdName);
		event.preventDefault();
		dispatch(addBird(birdName))
		setBird('');
	  };
	return(
		<>
			<form>
				<label>
					<p>Add Bird</p>
					<input onChange={e=>setBird(e.target.value)} value={birdName} type="text"/>
				</label>
				<div>
				<button onSubmit={handleSubmit} type="submit">Add</button>
				</div>
			</form>
		</>
	)
}