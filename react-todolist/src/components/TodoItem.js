import React, {Component} from 'react';
const TodoItem = React.createClass({
	toggleDone(){
		this.props.toggleDone(this.props.id)
	},
	render(){
		return(
				<li id={this.props.id}>
					<label>
						<input type="checkbox" checked={this.props.done}
									 onChange={this.toggleDone}/>
						<span>{this.props.task}</span>
					</label>
					<a href="javascript:;">&times;</a> 
				</li>
		)
	}
})
export default TodoItem;