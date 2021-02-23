import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Routers from './components/Router/router'
import Navbar from './components/Navigation/navbar';
import { useSelector } from 'react-redux';
import Birds from './components/Birds/Birds'
function App() {
	const birds = useSelector(state => state.birds);
  return (
    <div className="">
	  <BrowserRouter>
		<Navbar/>
		<Routers/>
		
	  </BrowserRouter>
    </div>
  );
}

export default App;
