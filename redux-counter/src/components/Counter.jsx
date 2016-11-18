import React, { Component, PropTypes } from 'react';

const Counter = React.createClass({
	propTypes: {
		value: PropTypes.number.isRequired,
		onIncrement: PropTypes.func.isRequired,
		onDecrement: PropTypes.func.isRequired
	},
	incrementIfOdd() {
		if(this.props.value % 2 !== 0){
			this.props.onIncrement()
		}
	},
	render(){
		const { value, onIncrement, onDecrement, inCrementIfOdd} = this.props
		return (
			<p>
				Clicked: {value} times
				{' '}
				<button onClick={onIncrement}>add</button>
				{' '}
				<button onClick={onDecrement}>minus</button>
				{' '}
				<button onClick={this.incrementIfOdd}>Increment if odd</button>
			</p>
		)
	}
})
export default Counter;