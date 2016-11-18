import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
	static propTypes: {
		value: PropTypes.number.isRequired,
		onIncrement: PropTypes.func.isRequired,
		onDecrement: PropTypes.fucn.isRequired
	}
	render(){
		const { value, onIncrement, onDecrement} = this.props
		return (
			<p>
				Clicked: {value} times
				{' '}
				<button onClick={onIncrement}>add</button>
				{' '}
				<button onClick={onDecrement}>minus</button>
			</p>
		)
	}
}