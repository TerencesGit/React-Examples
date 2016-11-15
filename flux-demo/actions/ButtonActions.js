import AppDispatcher from '../dispatcher/AppDispatcher';
var ButtonActions = {
	addNewItems: function(text){
		AppDispatcher.dispatch({
			actionType: 'ADD_NEW_ITEM',
			text: text
		})
	}
}
module.exports = ButtonActions;