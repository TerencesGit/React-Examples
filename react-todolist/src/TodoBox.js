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
	addTodo(newItem){
		newItem.id = this.state.todolist.length + 1;
	  var newTodoList = this.state.todolist.concat(newItem);
	  this.setState({
	  	todolist: newTodoList
	  })
	},
	// todoCount(){ 
	// 	var todo = {
	// 		todoCount: this.state.todolist.length,
	// 		todoCountComp: this.state.todolist.filter(function(item){
	// 			return item.complete === true;
	// 		}).length, 
	// 	}
	// 	return todo;
	// },
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