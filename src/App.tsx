import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Signup from './Pages/Sign/Signup';
import Signin from './Pages/Sign/Signin';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/bootstrap.css';
import './assets/css/responsive.css';

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/signup" component={Signup}></Route>
				<Route exact path="/signin" component={Signin}></Route>
				<Route path="*" component={Home}></Route>
			</Switch>
			<ToastContainer />
		</BrowserRouter>
	);
}

export default App;
