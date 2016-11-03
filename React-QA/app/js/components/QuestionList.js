var React = require('react');
var QuestionItem = require('./QuestionItem');
module.exports = React.createClass({
	render: function(){
		var questions = this.props.questions;
		if(!Array.isArray(questions)) throw new Error('不是数组');
		var questionsComp = questions.map(function(item){
			return <QuestionItem key={item.key} 
			title={item.title} description={item.description} 
			voteCount={item.voteCount} />
		}) 
		return(
			<div id="questions" className="">
        {questionsComp}
      </div>
		)
	}
})