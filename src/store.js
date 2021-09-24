import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import async from './middlewares/async';
import reducers from './reducers';
const Root = ({ children, initialState = {} }) => {
	const store = createStore(reducers, initialState, applyMiddleware(async));
	return <Provider store={store}>{children}</Provider>;
};

export default Root;
