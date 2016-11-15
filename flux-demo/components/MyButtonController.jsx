import React from 'react';
import ListStore from '../stores/ListStore';
import ButtonActions from '../actions/ButtonActions';
import MyButton from './MyButton';
var MyButtonController = React.createClass({
	getInitialState() {
		return {
			items: ListStore.getAll()
		}
	},
	componentDidMount() {
		ListStore.addChangeListener(this._onChange)
	},
	componentWillUnmount() {
		ListStore.removeChangeListener(this._onChange)
	},
	_onChange(){
		this.setState({
			items: ListStore.getAll()
		})
	},
	createNewItem(e){
		ButtonActions.addNewItems('new item');
	},
	render(){
		return <MyButton items={this.state.items}
						onClick={this.createNewItem} />
	}
})
module.exports = MyButtonController;