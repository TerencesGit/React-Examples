import React from 'react';
import QuestionComp from './questionComp';
var FormComp = React.createClass({
	getInitialState(){
		return{
			name : ["judge-1","judge-2","judge-3"],
        
      label : ["do you think yxy is handsome?",
               "do you like this boke?",
               "do you want to know React?"
             ],
         
	    value1 : "true",
	    value2 : "true",
	    value3 : "true"
		}
	},
	handleChange(value, e){
		var newState = {};
		newState[value] = e.target.value;
		this.setState(newState)
	},
	handleSubmit(e){
		e.preventDefault();
		console.log(this.state)
	}, 
	render(){
		var renderChilds = [];
		renderChilds = this.state.name.map(function(value,index){
	   	return(
         <QuestionComp name={this.state.name[index]} 
        	 label={this.state.label[index]} 
         	 onChange={this.handleChange.bind(this,"value"+(index+1))} 
         	 key={index}/>
	     );
    }.bind(this));
    return(
      <form onSubmit={this.handleSubmit}>
	       {renderChilds}
	       <button type="submit">提交</button>
      </form>
    );
	}
})
module.exports = FormComp;