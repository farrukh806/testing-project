import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from './store';
import App from './components/App';

ReactDOM.render(
	<Root>
		<BrowserRouter>
			<Route path='/' component={App} />
		</BrowserRouter>
	</Root>,
	document.querySelector('#root')
);
