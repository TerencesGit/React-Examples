import React from 'react';
import Todolist from './components/Todolist';
import Todoform from './components/Todoform';
const TodoBox = React.createClass({
	getInitialState() {
		return {
			todolist: [
				{"id": "1", "task":"吃饭", "done": false},
        {"id": "2", "task":"睡觉", "done": false},
        {"id": "3", "task":"打豆豆", "done": true},
			]
		}
	},
	onNewTodo(newItem){
		newItem.id = this.state.todolist.length + 1;
	  var newTodoList = this.state.todolist.concat(newItem);
	  this.setState({
	  	todolist: newTodoList
	  })
	},
	todoCount(){ 
		var todo = {
			todoCount: this.state.todolist.length,
			todoCountComp: this.state.todolist.filter(function(item){
				return item.complete === true;
			}).length, 
		}
		return todo;
	},
	handleToggleDone(id){
		console.log(id)
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
	},
	render(){
		return(
			<div className="main">
				<h1 className="title">React-Todolist</h1>
				<Todoform newTodoItem={this.onNewTodo} /> 
				<Todolist todolist={this.state.todolist} 
									todoCount={this.todoCount}
									toggleDone={this.handleToggleDone}/> 
			</div>
		)
	}
})
export default TodoBox;