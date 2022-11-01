import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import ContextProvider, { useBlockchainContext } from "./contexts";
require('dotenv').config();

ReactDOM.render(
	<ContextProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ContextProvider>,
	document.getElementById('root')
);

reportWebVitals();
