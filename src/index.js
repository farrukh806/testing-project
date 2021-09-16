import React from 'react';
import ReactDOM from 'react-dom';
import Root from './store';
import App from './components/App';

ReactDOM.render(
	<Root>
		<App />
	</Root>,
	document.querySelector('#root')
);
