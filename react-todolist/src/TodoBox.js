import React from 'react';
import Todolist from './components/Todolist';
import Todoform from './components/Todoform';
const TodoBox = React.createClass({
	getInitialState() {
		var data = JSON.parse(localStorage.getItem('react-todos'));
		console.log(data)
		return {
			todolist: data || []
		}
	},
	saveTodos(){
		localStorage.setItem('react-todos',JSON.stringify(this.state.todolist))
	},
	addTodo(newItem){
		newItem.id = new Date().getTime();
	  var newTodoList = this.state.todolist.concat(newItem);
	  this.setState({
	  	todolist: newTodoList
	  });
	  this.saveTodos()
	},
	handleToggleDone(id){
		var data = this.state.todolist;
		for(var i in data){
			if(data[i].id == id){
				data[i].done = !data[i].done;
				break;
			}
		}
		this.setState({
			todolist: data
		})
		this.saveTodos()
	},
	removeTodo(id){
		var data = this.state.todolist;
		// for(var i in data){
		// 	if(data[i].id == id){
		// 		console.log(data[i])
		// 		data.splice(data[i],1);
		// 		break;
		// 	}
		// }
		data = data.filter(function(item){
			return item.id !== id
		})
		this.setState({
			todolist: data
		})
		this.saveTodos()
	},
	updateTodo(task,id){
		var data = this.state.todolist;
		for(var i in data){
			if(data[i].id == id){
				data[i].task = task;
				break;
			}
		}
		this.setState({
			todolist: data
		})
		this.saveTodos()
	},
	render(){
		return(
			<div className="main">
				<Todoform newTodoItem={this.addTodo} /> 
				<Todolist todolist={this.state.todolist} 
									todoCount={this.todoCount}
									toggleDone={this.handleToggleDone}
									removeTodo={this.removeTodo} 
									updateTodo={this.updateTodo}/> 
			</div>
		)
	}
})
export default TodoBox;