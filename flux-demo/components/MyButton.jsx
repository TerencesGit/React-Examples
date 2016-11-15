import React from 'react';
var MyButton = function(props){
	var items = props.items;
	var itemHtml = items.map(function(listItem, i){
		return <li key={i}>{listItem}</li>
	})
	return (
		<div>
			<button onClick={props.onClick}>New Item</button>
			<ul>{itemHtml}</ul>
		</div>
	)
}
module.exports = MyButton;