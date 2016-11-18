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
		this.setState({
			editState : !this.state.editState
		})
		this.refs.inputText.focus();
	},
	handleUpdate(e){
		var text = this.refs.inputText.value;
		if(e.keyCode == 13){
			if(text.trim()){
				this.props.updateTodo(text,this.props.id)
			}
			this.setState({
				editState : !this.state.editState
			})
		}
	},
	handleBlur(){
		this.setState({
			editState : false
		})
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
					<input ref="inputText" defaultValue={this.props.task} 
												style={editStyle} 
												className="editInput"
												onKeyDown={this.handleUpdate} 															
											  onBlur={this.handleBlur} 
											  autoFocus={true} />
					<a href="javascript:;" onClick={this.removeTodo}>&times;</a> 
				</li>
		)
	}
})
export default TodoItem;