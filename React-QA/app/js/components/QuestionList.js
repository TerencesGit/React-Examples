var React = require('react');
var QuestionItem = require('./QuestionItem');
module.exports = React.createClass({
	render: function(){
		var questions = this.props.questions;
		if(!Array.isArray(questions)) throw new Error('question必须是数组');
		var questionsComp = questions.map(function(item){
			return <QuestionItem key={item.key} 
										questionKey={item.key}
										title={item.title} 
										description={item.description} 
										voteCount={item.voteCount} 
										onVote={this.props.onVote}/>
		}.bind(this));
		return(
			<div id="questions" className="">
        {questionsComp}
      </div>
		)
	}
})