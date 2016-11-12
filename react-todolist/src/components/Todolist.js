import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class Todoform extends Component{
	render(){
		var todolist = this.props.todolist;
		var todolistDone = todolist.filter(function(item){
			return item.done === true
		})
		if(!Array.isArray(todolist)) throw new Error('TodoList必须是数组！');
		var todoList = todolist.map(function(item){
			return <TodoItem id = {item.id}
											key = {item.id}	
											task = {item.task}
											done = {item.done}
											toggleDone={this.props.toggleDone}
											removeTodo={this.props.removeTodo}
											updateTodo={this.props.updateTodo}/>
		}.bind(this))	
		return(
			<div className="todolist">
				<ul>
					{todoList} 
				</ul>
				<div className="todofooter">
					<span>共<strong>{todolist.length}</strong> 个任务，
					已完成 {todolistDone.length}个</span>
				</div>
			</div>
		)
	}
}