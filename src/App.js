import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Routers from './components/Router/router'
import Navbar from './components/Navigation/navbar';
import Footer from './components/Navigation/footer';
import { useSelector } from 'react-redux';
function App() {
  return (
    <div className="">
	  <BrowserRouter>
		<Navbar/>
		<Routers/>
		<Footer/>
	  </BrowserRouter>
    </div>
  );
}

export default App;
