import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
	render(){
		return (
			<p>
				Clicked: times
				<button>add</button>
			</p>
		)
	}
}