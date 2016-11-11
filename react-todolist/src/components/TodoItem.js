import React, {Component} from 'react';
const TodoItem = React.createClass({
	getInitialState(){
		return{
			editState: false
		}
	},
	toggleDone(){
		this.props.toggleDone(this.props.id)
	},
	removeTodo(){
		this.props.removeTodo(this.props.id)
	},
	editTodo(){
		console.log(this.props.id)
		this.setState({
			editState : !this.state.editState
		})
	},
	handleUpdate(e){
		console.log()
		if(e && e.keyCode == 13){
			this.setState({
				editState : !this.state.editState
			})
		}
	},
	handelValue(){
		console.log(123)
	},
	render(){
		var editStyle = {
			display: this.state.editState ? 'inline-block' : 'none'
		};
		var taskStyle = {
			display: this.state.editState ? 'none' : 'inline-block'
		};
		return(
				<li id={this.props.id}>
					<input type="checkbox" checked={this.props.done}
									 onChange={this.toggleDone}/>
					<span style={taskStyle} 
								onDoubleClick={this.editTodo}>
							{this.props.task}
					</span>
					<input ref="inputText" defalutValue={this.props.task} 
												style={editStyle} 
												className="editInput"
												onKeyPress={this.handleUpdate} 															
											  />
					<a href="javascript:;" onClick={this.removeTodo}>&times;</a> 
				</li>
		)
	}
})
export default TodoItem;