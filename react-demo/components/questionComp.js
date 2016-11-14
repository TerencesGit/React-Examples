import React from 'react';
var QuestionComp = React.createClass({
	getInitialState() {
		return {
			value: 'true'
		}
	},
	handleChange(e){
		if(this.props.onChange){
			this.props.onChange(e)
		}
		this.setState({
			value: e.target.value
		})
	},
	render(){
		return(
			<div>
				<label>{this.props.label}</label>
        <input type="radio" name={this.props.name} 
					        checked={this.state.value == "true"} 
					        value="true" 
					        onChange={this.handleChange} />
        "true"
        <input type="radio" name={this.props.name} 
					        checked={this.state.value == "false"} 
					        value="false" 
					        onChange={this.handleChange} />
        "false"
			</div>
		)
	}
})
module.exports = QuestionComp;