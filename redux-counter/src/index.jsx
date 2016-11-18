import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';

const rootEle = document.getElementById('root');
const render = () => ReactDOM.render(
	<Counter />,
	rootEle
)
render()