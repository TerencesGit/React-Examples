import React from 'react';
 const TodoForm = React.createClass({
	handleSubmit(e){
		e.preventDefault();
		var todoItem = {
			task: this.refs.task.value,
			done: false  
		}
		this.refs.form.reset()
		this.props.newTodoItem(todoItem)
	},
	render(){
		return(
			<form ref="form" className="todoform" onSubmit={this.handleSubmit}>
				<input ref="task" placeholder="what needs to be done?"/>
				<button type="submit">添加</button>
			</form>
		)
	}
})
export default TodoForm;