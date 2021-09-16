import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './components/reducers';

const Root = (props) => {
	return (
		<Provider store={createStore(reducers, {})}>{props.children}</Provider>
	);
};

export default Root;
