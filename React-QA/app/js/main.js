var React = require('react'),
		ReactDOM = require('react-dom');
var QuestionApp = require('./components/QuestionApp');
var mainCom = ReactDOM.render(
	<QuestionApp />,
	document.getElementById('app')
)